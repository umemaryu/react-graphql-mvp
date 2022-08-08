export const inputValidation = (state: Record<string, string>) => {
	let inputError = undefined;

	for (let key in state) {
		if (state[key as keyof typeof state] === "") {
			inputError = `${[key as keyof typeof state]} should be filled`;
			return { inputError };
		}
	}

	return { inputError };
};
