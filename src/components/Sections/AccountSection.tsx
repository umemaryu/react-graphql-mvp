import React, { useCallback, useState } from "react";
import { Box, Button, Center, Text } from "components/Elements";
import { theme } from "utils/theme";
import { ThreadLayout } from "components/Layout";
import { Form } from "components/Form";
import { UpdatePassword, UpdateTokenToNull } from "types";
import useCustomToast from "hooks/useCustomToast";
import { passwordValidation } from "utils/passwordValidation";

type Input = Props;

const useAccount = ({ id, actions }: Input) => {
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
		oldPassword: "",
		newPassword: "",
	});

	const [error, setError] = useState<string>("");
	const { setError: setToastError, setSuccess } = useCustomToast();

	const onChangeFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => ({ ...prevState, [id]: value }));
	}, []);
	const onClickUpdatePassword = useCallback(async () => {
		const { passwordError: oldPasswordError } = passwordValidation(
			state.oldPassword
		);
		const { passwordError: newPasswordError } = passwordValidation(
			state.newPassword
		);
		if (oldPasswordError) {
			setError(oldPasswordError);
		} else if (newPasswordError) {
			setError(newPasswordError);
		} else if (!id) {
			setToastError({
				title: "Authorization Error",
				description: "Please reload and try again",
			});
		} else {
			await actions.updatePassword({
				id: id,
				...state,
			});
			setSuccess({ title: "Password changed ", description: "" });
			setState({
				newPassword: "",
				oldPassword: "",
			});
		}
	}, [state, actions, setError, setSuccess, setToastError, id]);
	const onClickSignOut = useCallback(async () => {
		if (!id) return;
		await actions.updateTokenToNull({ id: id });
		window.location.reload();
	}, [actions, id]);
	return {
		models: { list, state, error },
		operations: { onChangeFormInput, onClickUpdatePassword, onClickSignOut },
	};
};

type Props = {
	id: number | undefined;
	actions: {
		updateTokenToNull: UpdateTokenToNull;
		updatePassword: UpdatePassword;
	};
};

export const AccountSection: React.FC<Props> = ({ id, actions }) => {
	const { models, operations } = useAccount({ id, actions });
	return (
		<ThreadLayout page="Account">
			<Box w={theme.w.mobile}>
				<Form
					error={models.error}
					list={models.list}
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
				<Center>
					<Text
						display={"inline-block"}
						cursor="pointer"
						onClick={operations.onClickSignOut}
					>
						Sign out
					</Text>
				</Center>
			</Box>
		</ThreadLayout>
	);
};
