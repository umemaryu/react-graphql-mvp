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
import { IUpdateTokenByLogin } from "types";

type Input = Props;

const useLogin = ({ actions }: Input) => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const list = [
		{
			id: "email",
			text: "Email",
			type: "email",
			placeholder: "mail@example.com",
			value: state.email,
		},
		{
			id: "password",
			text: "Password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
			value: state.password,
		},
	];

	const navigate = useNavigate();
	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const onClickLogin = useCallback(async () => {
		const res = await actions.updateTokenByLogin({
			...state,
		});
		if (res?.updateTokenByLogin) window.location.reload();
	}, [state, actions]);
	const onClickSignUp = useCallback(() => {
		navigate("/sign-up");
	}, [navigate]);
	return {
		list,
		operations: { onChangeFormInput, onClickLogin, onClickSignUp },
	};
};

type Props = {
	actions: {
		updateTokenByLogin: IUpdateTokenByLogin;
	};
};

export const LoginSection: React.FC<Props> = ({ actions }) => {
	const { list, operations } = useLogin({ actions });
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
