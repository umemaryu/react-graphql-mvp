import {
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
} from "infra/codegen";
import { useState } from "react";
import { CreateUser, UpdateTokenByLogin, UpdateTokenToNull } from "types";
import { emailValidation } from "utils/emailValidation";
import { passwordValidation } from "utils/passwordValidation";
import { inputValidation } from "utils/inputValidation";
import useAuthOperations from "infra/operations/useAuthOperations";

export const useAuth = () => {
	const [error, setError] = useState("");
	const { user, loading, mutations } = useAuthOperations();

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
		models: { user },
		operations: { signUp, singOut, login },
		loading,
		error,
	};
};
