import React, { useCallback, useState } from "react";
import {
	Button,
	Center,
	Layout,
	Divider,
	VStack,
	Text,
} from "components/Elements";
import { Form } from "components/Form";
import { theme } from "utils/theme";
import { useNavigate } from "react-router-dom";
import { UpdateTokenByLogin } from "types";
import { emailValidation } from "utils/emailValidation";
import { inputValidation } from "utils/inputValidation";
import { passwordValidation } from "utils/passwordValidation";

type Input = Props;

const useLogin = ({ actions }: Input) => {
	const list = [
		{
			id: "email",
			text: "Email",
			placeholder: "mail@example.com",
		},
		{
			id: "password",
			text: "Password(min 6 letters)",
			placeholder: "abc123",
		},
	];

	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState<string>("");

	const navigate = useNavigate();

	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);

	const onClickLogin = useCallback(async () => {
		const { inputError } = inputValidation(state);
		const { emailError } = emailValidation(state.email);
		const { passwordError } = passwordValidation(state.password);
		if (emailError) {
			setError(emailError);
		} else if (inputError) {
			setError(inputError);
		} else if (passwordError) {
			setError(passwordError);
		} else {
			const res = await actions.updateTokenByLogin({
				...state,
			});
			if (res?.updateTokenByLogin) window.location.reload();
		}
	}, [state, actions]);

	const onClickSignUp = useCallback(() => {
		navigate("/sign-up");
	}, [navigate]);
	return {
		models: { list, state, error },
		operations: { onChangeFormInput, onClickLogin, onClickSignUp },
	};
};

type Props = {
	actions: {
		updateTokenByLogin: UpdateTokenByLogin;
	};
};

export const LoginSection: React.FC<Props> = ({ actions }) => {
	const { models, operations } = useLogin({ actions });
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>Login</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form
						list={models.list}
						onChange={operations.onChangeFormInput}
						values={models.state}
						error={models.error}
					/>
					<Button w={"100%"} mb={theme.m.sm} onClick={operations.onClickLogin}>
						Login
					</Button>
					<Divider mb={theme.m.sm} />
					<Center>
						<Text
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={operations.onClickSignUp}
						>
							Sign up
						</Text>
					</Center>
				</Layout>
			</VStack>
		</Center>
	);
};
