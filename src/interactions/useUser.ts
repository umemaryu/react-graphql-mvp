import {
	MutationUpdatePasswordArgs,
	QueryFetchUserByEmailArgs,
} from "infra/codegen";
import { useUserOperations } from "infra/operations";
import { useState } from "react";
import { passwordValidation } from "utils/passwordValidation";

export const useUser = () => {
	const [error, setError] = useState("");
	const { models, queries, mutations } = useUserOperations();
	const { user } = models;
	const changePassword = async (args: MutationUpdatePasswordArgs) => {
		const oldPasswordError = passwordValidation(args.oldPassword);
		const newPasswordError = passwordValidation(args.newPassword);
		const errorMessage = oldPasswordError || newPasswordError;
		if (errorMessage) {
			setError(errorMessage);
			return;
		}
		await mutations.updatePassword(args);
	};

	const searchUser = async (args: QueryFetchUserByEmailArgs) => {
		await queries.fetchUserByEmail(args);
	};

	return {
		models: { user },
		error,
		operations: { changePassword, searchUser },
	};
};
