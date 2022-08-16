import {
	MutationUpdatePasswordArgs,
	useUpdatePasswordMutation,
} from "infra/codegen";

export const useUserOperations = () => {
	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword: (
		args: MutationUpdatePasswordArgs
	) => Promise<void> = async (args) => {
		await UPDATE_PASSWORD({
			variables: args,
		});
	};
	return { mutations: { updatePassword } };
};

export default useUserOperations;
