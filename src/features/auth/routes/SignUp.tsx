import React, { useCallback, useState } from "react";
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
	}, [state]);
	const onClickLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Container borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} onChange={onChange} />
					<Button isFullWidth mb={theme.m.sm} onClick={onClickRegister}>
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
