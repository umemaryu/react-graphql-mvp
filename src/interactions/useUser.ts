import { MutationUpdatePasswordArgs } from "infra/codegen";
import useUserOperations from "infra/operations/useUserOperations";
import { useState } from "react";
import { passwordValidation } from "utils/passwordValidation";

export const useUser = () => {
	const [error, setError] = useState("");
	const { mutations } = useUserOperations();
	const changePassword = async (args: MutationUpdatePasswordArgs) => {
		const oldPasswordError = passwordValidation(args.oldPassword);
		const newPasswordError = passwordValidation(args.newPassword);
		const errorMessage = oldPasswordError || newPasswordError;
		if (errorMessage) {
			setError(errorMessage);
			throw new Error(errorMessage);
		} else {
			await mutations.updatePassword(args);
		}
	};
	return { models: { error }, operations: { changePassword } };
};
