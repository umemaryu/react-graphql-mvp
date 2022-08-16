import {
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
} from "infra/codegen";
import { useState } from "react";
import { emailValidation } from "utils/emailValidation";
import { passwordValidation } from "utils/passwordValidation";
import { inputValidation } from "utils/inputValidation";
import { useAuthOperations } from "infra/operations";

export const useAuth = () => {
	const [error, setError] = useState("");
	const { user, loading, mutations } = useAuthOperations();

	const login = async (args: MutationUpdateTokenByLoginArgs) => {
		const emailError = emailValidation(args.email);
		const passwordError = passwordValidation(args.password);
		const errorMessage = emailError || passwordError;
		if (errorMessage) {
			setError(errorMessage);
			return;
		}
		await mutations.updateTokenByLogin(args);
	};

	const signUp = async (args: MutationCreateUserArgs) => {
		const inputError = inputValidation(args);
		const emailError = emailValidation(args.email);
		const passwordError = passwordValidation(args.password);
		const errorMessage = inputError || emailError || passwordError;
		if (errorMessage) {
			setError(errorMessage);
			return;
		}
		await mutations.createUser(args);
	};

	const singOut = async (args: MutationUpdateTokenToNullArgs) => {
		await mutations.updateTokenToNull(args);
	};

	return {
		models: { user },
		operations: { signUp, singOut, login },
		loading,
		error,
	};
};
