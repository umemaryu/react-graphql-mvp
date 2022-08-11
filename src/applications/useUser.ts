import {
	MutationUpdatePasswordArgs,
	useUpdatePasswordMutation,
} from "infra/codegen";
import { useState } from "react";
import { UpdatePassword } from "types";
import { passwordValidation } from "utils/passwordValidation";

export const useUser = () => {
	const [error, setError] = useState("");

	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword: UpdatePassword = async (
		args: MutationUpdatePasswordArgs
	) => {
		const { passwordError: oldPasswordError } = passwordValidation(
			args.oldPassword
		);
		const { passwordError: newPasswordError } = passwordValidation(
			args.newPassword
		);
		const errorMessage = oldPasswordError || newPasswordError;
		if (errorMessage) {
			setError(errorMessage);
			throw new Error(errorMessage);
		} else {
			await UPDATE_PASSWORD({
				variables: args,
			});
		}
	};
	return { models: { error }, operations: { updatePassword } };
};
