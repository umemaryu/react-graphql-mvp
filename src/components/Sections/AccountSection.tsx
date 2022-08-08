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
			text: "Old password(min 6 letters)",
			placeholder: "abc123",
		},
		{
			id: "newPassword",
			text: "New password(min 6 letters)",
			placeholder: "abc123",
		},
	];

	const [state, setState] = useState({
		newPassword: "",
		oldPassword: "",
	});

	const [error, setError] = useState<string>("");
	const { setError: setToastError, setSuccess } = useCustomToast();

	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => ({ ...prevState, [id]: value }));
	}, []);
	const onClickUpdatePassword = useCallback(async () => {
		const id = authStore();
		for (let key in state) {
			if (state[key as keyof typeof state] === "") {
				return setError(`${[key as keyof typeof state]} should be filled`);
			}
		}
		if (state.newPassword.length < 6 || state.oldPassword.length < 6) {
			setError(`Password must be over 6 letters`);
		} else if (!id) {
			setToastError({
				title: "Authorization Error",
				description: "Please reload and try again",
			});
		} else {
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
		}
	}, [state, actions, setError, setSuccess, setToastError]);
	const onClickSignOut = useCallback(async () => {
		const res = await actions.updateTokenToNull({ id: authStore() as number });
		if (res?.updateTokenToNull) window.location.reload();
	}, [actions]);
	return {
		list,
		models: { state, error },
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
					error={models.error}
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
