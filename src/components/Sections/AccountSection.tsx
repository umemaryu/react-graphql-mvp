import React, { useCallback, useState } from "react";
import { Box, Button, Text } from "components/Elements";
import { theme } from "utils/theme";
import { ThreadLayout } from "components/Layout";
import { Form } from "components/Form";
import { authStore } from "stores";
import { IUpdateTokenToNull } from "types";

type Input = Props;

const useAccount = ({ actions }: Input) => {
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
	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const onClickUpdatePassword = useCallback(() => {
		console.log(state);
	}, [state]);
	const onClickSignOut = useCallback(async () => {
		const res = await actions.updateTokenToNull({ id: authStore() as number });
		if (res?.updateTokenToNull) window.location.reload();
	}, [actions]);
	return {
		list,
		operations: { onChangeFormInput, onClickUpdatePassword, onClickSignOut },
	};
};

type Props = {
	actions: { updateTokenToNull: IUpdateTokenToNull };
};

export const AccountSection: React.FC<Props> = ({ actions }) => {
	const { list, operations } = useAccount({ actions });
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
					Sign out
				</Text>
			</Box>
		</ThreadLayout>
	);
};
