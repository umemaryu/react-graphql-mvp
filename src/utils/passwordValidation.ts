export const passwordValidation = (password: string) => {
	let passwordError = undefined;
	if (password.length < 6) {
		passwordError = "Password must be over 6 letters";
		return { passwordError };
	}
	return { passwordError };
};
