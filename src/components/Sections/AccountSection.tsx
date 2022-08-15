import { useCallback, useState } from "react";
import { Box, Button, Center, Text } from "components/Elements";
import { theme } from "utils/theme";
import { ThreadLayout } from "components/Layout";
import { Form } from "components/Form";
import { UpdatePassword, UpdateTokenToNull } from "types";
import useCustomToast from "hooks/useCustomToast";

type Input = {
	id: number | undefined;
	actions: {
		updateTokenToNull: UpdateTokenToNull;
		updatePassword: UpdatePassword;
	};
};

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

	const { setError, setSuccess } = useCustomToast();

	const handleFormInput = useCallback((value: string, id: string) => {
		setState((prevState) => ({ ...prevState, [id]: value }));
	}, []);
	const handleUpdatePassword = useCallback(async () => {
		if (!id) {
			setError({
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
	}, [state, actions, setSuccess, setError, id]);
	const handleSignOut = useCallback(async () => {
		if (!id) return;
		await actions.updateTokenToNull({ id: id });
		window.location.reload();
	}, [actions, id]);
	return {
		models: { list, state },
		operations: { handleFormInput, handleUpdatePassword, handleSignOut },
	};
};

type Props = {
	id: number | undefined;
	actions: {
		updateTokenToNull: UpdateTokenToNull;
		updatePassword: UpdatePassword;
	};
	error: string;
};

export const AccountSection: React.FC<Props> = ({ id, actions, error }) => {
	const { models, operations } = useAccount({ id, actions });
	return (
		<ThreadLayout page="Account">
			<Box w={theme.w.mobile}>
				<Form
					error={error}
					list={models.list}
					onChange={operations.handleFormInput}
					values={models.state}
				/>
				<Button
					onClick={operations.handleUpdatePassword}
					w={"100%"}
					mb={theme.m.md}
				>
					Update Password
				</Button>
				<Center>
					<Text
						display={"inline-block"}
						cursor="pointer"
						onClick={operations.handleSignOut}
					>
						Sign out
					</Text>
				</Center>
			</Box>
		</ThreadLayout>
	);
};
