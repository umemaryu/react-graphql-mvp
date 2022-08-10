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
import { emailValidation } from "utils/emailValidation";
import { CreateUser } from "types";
import { inputValidation } from "utils/inputValidation";
import { passwordValidation } from "utils/passwordValidation";

type Input = Props;

const useSignUp = ({ actions }: Input) => {
	const list = [
		{
			id: "nickName",
			text: "Nick name",
			placeholder: "Nick name",
		},
		{
			id: "country",
			text: "Country",
			placeholder: "Country",
		},
		{
			id: "city",
			text: "City",
			placeholder: "City",
		},
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
		nickName: "",
		country: "",
		city: "",
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
	const onClickRegister = useCallback(async () => {
		const { inputError } = inputValidation(state);
		const { emailError } = emailValidation(state.email);
		const { passwordError } = passwordValidation(state.password);
		if (inputError) {
			setError(inputError);
		} else if (emailError) {
			setError(emailError);
		} else if (passwordError) {
			setError(passwordError);
		} else {
			await actions.createUser({ ...state });
			window.location.reload();
		}
	}, [state, actions]);
	const onClickLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return {
		models: { list, error, state },
		operations: { onChangeFormInput, onClickRegister, onClickLogin },
	};
};

type Props = {
	actions: {
		createUser: CreateUser;
	};
};

export const SignUpSection: React.FC<Props> = ({ actions }) => {
	const { models, operations } = useSignUp({ actions });
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form
						list={models.list}
						values={models.state}
						onChange={operations.onChangeFormInput}
						error={models.error}
					/>
					<Button
						w={"100%"}
						mb={theme.m.sm}
						onClick={operations.onClickRegister}
					>
						Resister
					</Button>
					<Divider mb={theme.m.sm} />
					<Center>
						<Text
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={operations.onClickLogin}
						>
							Login
						</Text>
					</Center>
				</Layout>
			</VStack>
		</Center>
	);
};
