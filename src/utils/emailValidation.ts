export const emailValidation = (value: string) => {
	const reg = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
	const isValid = reg.test(value);
	const emailError: string = isValid ? "" : "Invalid Email";
	return { emailError };
};
