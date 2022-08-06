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

const useSignUp = () => {
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
	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const onClickRegister = useCallback(() => {
		console.log(state);
		navigate("/profile");
	}, [state, navigate]);
	const onClickLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return {
		list,
		operations: { onChangeFormInput, onClickRegister, onClickLogin },
	};
};

export const SignUpSection: React.FC = () => {
	const { list, operations } = useSignUp();
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Layout borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} onChange={operations.onChangeFormInput} />
					<Button
						w={"100%"}
						mb={theme.m.sm}
						onClick={operations.onClickRegister}
					>
						Resister
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={operations.onClickLogin}
						>
							Login
						</Text>
					</Box>
				</Layout>
			</VStack>
		</Center>
	);
};
