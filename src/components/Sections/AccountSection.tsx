import React, { useCallback, useState } from "react";
import { Box, Button, Text } from "components/Elements";
import { theme } from "utils/theme";
import { ThreadLayout } from "components/Layout";
import { Form } from "components/Form";
import { authStore } from "stores";
import { IUpdatePassword, IUpdateTokenToNull } from "types";
import useCustomToast from "hooks/useCustomToast";

type Input = Props;

const useAccount = ({ actions }: Input) => {
	const list = [
		{
			id: "oldPassword",
			text: "Old password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
		{
			id: "newPassword",
			text: "New password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
	];
	const [state, setState] = useState({
		newPassword: "",
		oldPassword: "",
	});
	const { setError, setSuccess } = useCustomToast();
	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => {
			return { ...prevState, [id]: value };
		});
	}, []);
	const onClickUpdatePassword = useCallback(async () => {
		const id = authStore();
		if (!id) {
			return setError({
				title: "Authorization Error",
				description: "Please reload and try again",
			});
		}
		const res = await actions.updatePassword({
			id: id,
			...state,
		});
		if (res?.updatePassword) {
			setSuccess({ title: "Password is changed ", description: "" });
			setState({
				newPassword: "",
				oldPassword: "",
			});
		}
	}, [state, actions, setError, setSuccess]);
	const onClickSignOut = useCallback(async () => {
		const res = await actions.updateTokenToNull({ id: authStore() as number });
		if (res?.updateTokenToNull) window.location.reload();
	}, [actions]);
	return {
		list,
		models: { state },
		operations: { onChangeFormInput, onClickUpdatePassword, onClickSignOut },
	};
};

type Props = {
	actions: {
		updateTokenToNull: IUpdateTokenToNull;
		updatePassword: IUpdatePassword;
	};
};

export const AccountSection: React.FC<Props> = ({ actions }) => {
	const { list, models, operations } = useAccount({ actions });
	return (
		<ThreadLayout page="Account">
			<Box w={theme.w.mobile}>
				<Form
					list={list}
					onChange={operations.onChangeFormInput}
					values={models.state}
				/>
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
