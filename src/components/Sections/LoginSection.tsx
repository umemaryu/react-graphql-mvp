import { useCallback, useState } from "react";
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

type Input = {
	actions: {
		updateTokenByLogin: UpdateTokenByLogin;
	};
};

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

	const navigate = useNavigate();

	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);

	const onClickLogin = useCallback(async () => {
		await actions.updateTokenByLogin({
			...state,
		});
		window.location.reload();
	}, [state, actions]);

	const onClickSignUp = useCallback(() => {
		navigate("/sign-up");
	}, [navigate]);
	return {
		models: { list, state },
		operations: { onChangeFormInput, onClickLogin, onClickSignUp },
	};
};

type Props = {
	actions: {
		updateTokenByLogin: UpdateTokenByLogin;
	};
	error: string;
};

export const LoginSection: React.FC<Props> = ({ actions, error }) => {
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
						error={error}
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
