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
import { CreateUser } from "types";

type Input = {
	actions: {
		createUser: CreateUser;
	};
};

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

	const navigate = useNavigate();
	const handleFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const handleRegister = useCallback(async () => {
		await actions.createUser({ ...state });
		window.location.reload();
	}, [state, actions]);
	const handleLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return {
		models: { list, state },
		operations: { handleFormInput, handleRegister, handleLogin },
	};
};

type Props = {
	actions: {
		createUser: CreateUser;
	};
	error: string;
};

export const SignUpSection: React.FC<Props> = ({ actions, error }) => {
	const { models, operations } = useSignUp({ actions });
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form
						list={models.list}
						values={models.state}
						onChange={operations.handleFormInput}
						error={error}
					/>
					<Button
						w={"100%"}
						mb={theme.m.sm}
						onClick={operations.handleRegister}
					>
						Resister
					</Button>
					<Divider mb={theme.m.sm} />
					<Center>
						<Text
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={operations.handleLogin}
						>
							Login
						</Text>
					</Center>
				</Layout>
			</VStack>
		</Center>
	);
};
