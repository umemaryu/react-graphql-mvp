import React, { useState } from "react";
import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { Center } from "components/Center/Center";
import { Container } from "components/Container/Container";
import { Divider } from "components/Divider/Divider";
import { Form } from "components/Form/Form";
import { VStack } from "components/Stack/VStack";
import { Text } from "components/Text/Text";
import { theme } from "utils/theme";
import { IFormList } from "interface/IFormList";

export const Login: React.FC = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const onChangeEmail = (value: string) => {
		setState({ ...state, email: value });
	};
	const onChangePassword = (value: string) => {
		setState({ ...state, password: value });
	};
	const list: IFormList[] = [
		{
			text: "Email",
			type: "email",
			placeholder: "mail@example.com",
			onChange: onChangeEmail,
		},
		{
			text: "Password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
			onChange: onChangePassword,
		},
	];
	const onClickLogin = () => {
		console.log(state);
	};
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>Login</Text>
				<Container borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} />
					<Button isFullWidth mb={theme.m.sm} onClick={onClickLogin}>
						Login
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={() => {
								console.log("onClick");
							}}
						>
							Sign up
						</Text>
					</Box>
				</Container>
			</VStack>
		</Center>
	);
};
