export const emailValidation = (value: string) => {
	const reg = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
	const isValid = reg.test(value);
	const emailError = isValid ? undefined : "Invalid Email";
	return emailError;
};
