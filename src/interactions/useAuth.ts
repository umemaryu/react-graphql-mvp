import {
	FetchUserByTokenQuery,
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	useUpdateTokenToNullMutation,
} from "infra/codegen";
import useClient from "hooks/useClient";
import { useState } from "react";
import { authStore } from "infra/stores/authStore";
import { CreateUser, UpdateTokenByLogin, UpdateTokenToNull } from "types";
import { emailValidation } from "utils/emailValidation";
import { passwordValidation } from "utils/passwordValidation";
import storage from "utils/storage";
import { inputValidation } from "utils/inputValidation";
import useAuthOperations from "infra/operations/useAuthOperations";

export const useAuth = (data?: FetchUserByTokenQuery | undefined) => {
	if (data) {
		const id = parseInt(data.fetchUserByToken.id);
		authStore(id);
	}
	const [error, setError] = useState("");

	const { mutations } = useAuthOperations();

	const updateTokenByLogin: UpdateTokenByLogin = async (
		args: MutationUpdateTokenByLoginArgs
	) => {
		const emailError = emailValidation(args.email);
		const passwordError = passwordValidation(args.password);
		const errorMessage = emailError || passwordError;
		if (errorMessage) {
			setError(errorMessage);
			throw new Error(errorMessage);
		}
		await mutations.updateTokenByLogin(args);
	};

	const createUser: CreateUser = async (args: MutationCreateUserArgs) => {
		const inputError = inputValidation(args);
		const emailError = emailValidation(args.email);
		const passwordError = passwordValidation(args.password);
		const errorMessage = inputError || emailError || passwordError;
		if (errorMessage) {
			setError(errorMessage);
			throw new Error(errorMessage);
		}
		await mutations.createUser(args);
	};

	const { client } = useClient();
	const [UPDATE_TOKEN_TO_NULL] = useUpdateTokenToNullMutation();
	const updateTokenToNull: UpdateTokenToNull = async (
		args: MutationUpdateTokenToNullArgs
	) => {
		const res = await UPDATE_TOKEN_TO_NULL({
			variables: args,
		});
		if (res.data && res.data.updateTokenToNull) {
			storage.clearToken();
			client.clearStore();
		}
	};

	return {
		models: { error },
		operations: { createUser, updateTokenToNull, updateTokenByLogin },
	};
};
