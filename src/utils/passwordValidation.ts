export const passwordValidation = (password: string) => {
	const passwordError =
		password.length < 6 ? "Password must be over 6 letters" : undefined;
	return passwordError;
};
