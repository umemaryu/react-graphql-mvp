import React, { useCallback, useState } from "react";
import {
	Box,
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

const useLogin = () => {
	const list = [
		{
			id: "email",
			text: "Email",
			type: "email",
			placeholder: "mail@example.com",
		},
		{
			id: "password",
			text: "Password(min 6 characters)",
			type: "password",
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
	const onClickLogin = useCallback(() => {
		console.log(state, "API communication");
		navigate("/profile");
	}, [state, navigate]);
	const onClickSignUp = useCallback(() => {
		navigate("/sign-up");
	}, [navigate]);
	return {
		list,
		operations: { onChangeFormInput, onClickLogin, onClickSignUp },
	};
};

export const LoginSection: React.FC = () => {
	const { list, operations } = useLogin();
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>Login</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} onChange={operations.onChangeFormInput} />
					<Button w={"100%"} mb={theme.m.sm} onClick={operations.onClickLogin}>
						Login
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={operations.onClickSignUp}
						>
							Sign up
						</Text>
					</Box>
				</Layout>
			</VStack>
		</Center>
	);
};
