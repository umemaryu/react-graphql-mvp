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
import { IFormList } from "interface/IFormList";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
	const list: IFormList[] = [
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
	const onChange = useCallback(
		(value: string, id: string) => {
			setState({ ...state, [id]: value });
		},
		[state]
	);
	const onClickLogin = useCallback(() => {
		console.log(state, "API communication");
		navigate("/profile");
	}, [state, navigate]);
	const onClickSignUp = useCallback(() => {
		navigate("/sign-up");
	}, [navigate]);
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>Login</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} onChange={onChange} />
					<Button w={"100%"} mb={theme.m.sm} onClick={onClickLogin}>
						Login
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={onClickSignUp}
						>
							Sign up
						</Text>
					</Box>
				</Layout>
			</VStack>
		</Center>
	);
};
