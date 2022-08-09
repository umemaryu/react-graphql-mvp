import {
	MutationUpdatePasswordArgs,
	useUpdatePasswordMutation,
} from "gql/codegen";

export const useUser = () => {
	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword = async (args: MutationUpdatePasswordArgs) => {
		return await UPDATE_PASSWORD({
			variables: args,
		}).then((res) => {
			return res.data;
		});
	};
	return { operations: { updatePassword } };
};
