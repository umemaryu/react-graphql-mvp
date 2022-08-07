import React, { useCallback, useState } from "react";
import { Box, Button, Text } from "components/Elements";
import { theme } from "utils/theme";
import { ThreadLayout } from "components/Layout";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";

const useAccount = () => {
	const list = [
		{
			id: "newPassword",
			text: "New password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
		{
			id: "oldPassword",
			text: "Old password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
	];
	const [state, setState] = useState({
		newPassword: "",
		oldPassword: "",
	});
	const navigate = useNavigate();
	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const onClickUpdatePassword = useCallback(() => {
		console.log(state);
	}, [state]);
	const onClickSignOut = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	return {
		list,
		operations: { onChangeFormInput, onClickUpdatePassword, onClickSignOut },
	};
};

export const AccountSection: React.FC = () => {
	const { list, operations } = useAccount();
	return (
		<ThreadLayout page="Account">
			<Box w={theme.w.mobile}>
				<Form list={list} onChange={operations.onChangeFormInput} />
				<Button
					onClick={operations.onClickUpdatePassword}
					w={"100%"}
					mb={theme.m.md}
				>
					Update Password
				</Button>
				<Text
					cursor="pointer"
					textAlign="center"
					onClick={operations.onClickSignOut}
				>
					Sign Out
				</Text>
			</Box>
		</ThreadLayout>
	);
};
