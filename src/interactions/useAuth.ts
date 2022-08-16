import {
	FetchUserByTokenQuery,
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
} from "infra/codegen";
import { useState } from "react";
import { authStore } from "infra/stores/authStore";
import { CreateUser, UpdateTokenByLogin, UpdateTokenToNull } from "types";
import { emailValidation } from "utils/emailValidation";
import { passwordValidation } from "utils/passwordValidation";
import { inputValidation } from "utils/inputValidation";
import useAuthOperations from "infra/operations/useAuthOperations";

export const useAuth = (data?: FetchUserByTokenQuery | undefined) => {
	if (data) {
		const id = parseInt(data.fetchUserByToken.id);
		authStore(id);
	}
	const [error, setError] = useState("");
	const { mutations } = useAuthOperations();

	const login: UpdateTokenByLogin = async (
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

	const signUp: CreateUser = async (args: MutationCreateUserArgs) => {
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

	const singOut: UpdateTokenToNull = async (
		args: MutationUpdateTokenToNullArgs
	) => {
		await mutations.updateTokenToNull(args);
	};

	return {
		error,
		operations: { signUp, singOut, login },
	};
};
