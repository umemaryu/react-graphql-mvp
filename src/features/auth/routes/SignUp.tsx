import React, { useCallback, useState } from "react";
import {
	Box,
	Button,
	Center,
	Container,
	Divider,
	VStack,
	Text,
} from "components/Elements";
import { Form } from "components/Form";
import { theme } from "utils/theme";
import { IFormList } from "interface/IFormList";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
	const list: IFormList[] = [
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
		nickName: "",
		country: "",
		city: "",
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
	const onClickRegister = useCallback(() => {
		console.log(state);
		navigate("/profile");
	}, [state, navigate]);
	const onClickLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Container borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} onChange={onChange} />
					<Button w={"100%"} mb={theme.m.sm} onClick={onClickRegister}>
						Resister
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={onClickLogin}
						>
							Login
						</Text>
					</Box>
				</Container>
			</VStack>
		</Center>
	);
};
