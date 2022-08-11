export const inputValidation = (state: Record<string, string>) => {
	let inputError = undefined;

	for (let key in state) {
		if (state[key] === "") {
			inputError = `${key} should be filled`;
			return inputError;
		}
	}

	return inputError;
};
