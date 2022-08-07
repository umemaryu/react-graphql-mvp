import {
	MutationCreateUserArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useUpdateTokenToNullMutation,
} from "gql/codegen";
import storage from "utils/storage";

export const useAuth = () => {
	const [CREATE_USER] = useCreateUserMutation();
	const createUser = async (args: MutationCreateUserArgs) => {
		return await CREATE_USER({
			variables: args,
		}).then((res) => {
			if (res.data && res.data.createUser.token)
				storage.setToken(res.data.createUser.token);
			return res.data;
		});
	};
	const [UPDATE_TOKEN_TO_NULL] = useUpdateTokenToNullMutation();
	const updateTokenToNull = async (args: MutationUpdateTokenToNullArgs) => {
		return await UPDATE_TOKEN_TO_NULL({
			variables: args,
		}).then((res) => {
			if (res.data && res.data.updateTokenToNull) {
				storage.clearToken();
			}
			return res.data;
		});
	};

	return { operations: { createUser, updateTokenToNull } };
};
