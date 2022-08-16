import useClient from "hooks/useClient";
import {
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useUpdateTokenByLoginMutation,
	useUpdateTokenToNullMutation,
} from "infra/codegen";
import storage from "utils/storage";

export const useAuthOperations = () => {
	const [UPDATE_TOKEN_BY_LOGIN] = useUpdateTokenByLoginMutation();
	const updateTokenByLogin: (
		args: MutationUpdateTokenByLoginArgs
	) => Promise<void> = async (args) => {
		await UPDATE_TOKEN_BY_LOGIN({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			storage.setToken(res.data.updateTokenByLogin);
		});
	};

	const [CREATE_USER] = useCreateUserMutation();
	const createUser: (args: MutationCreateUserArgs) => Promise<void> = async (
		args
	) => {
		await CREATE_USER({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			storage.setToken(res.data.createUser);
		});
	};

	const { client } = useClient();
	const [UPDATE_TOKEN_TO_NULL] = useUpdateTokenToNullMutation();
	const updateTokenToNull: (
		args: MutationUpdateTokenToNullArgs
	) => Promise<void> = async (args) => {
		await UPDATE_TOKEN_TO_NULL({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			storage.clearToken();
			client.clearStore();
		});
	};
	return { mutations: { updateTokenByLogin, createUser, updateTokenToNull } };
};

export default useAuthOperations;
