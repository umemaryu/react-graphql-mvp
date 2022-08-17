import useClient from "hooks/useClient";
import {
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useFetchUserByTokenQuery,
	useUpdateTokenByLoginMutation,
	useUpdateTokenToNullMutation,
} from "infra/codegen";
import { authStore } from "infra/stores/authStore";
import { User } from "types";
import storage from "utils/storage";

type Mutations = {
	updateTokenByLogin: (args: MutationUpdateTokenByLoginArgs) => Promise<void>;
	createUser: (args: MutationCreateUserArgs) => Promise<void>;
	updateTokenToNull: (args: MutationUpdateTokenToNullArgs) => Promise<void>;
};

export const useAuthOperations: () => {
	user: User | undefined;
	loading: boolean;
	mutations: Mutations;
} = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	const user: User | undefined = data?.fetchUserByToken;
	if (!authStore() && user) {
		const id = parseInt(user.id);
		authStore(id);
	}

	const [UPDATE_TOKEN_BY_LOGIN] = useUpdateTokenByLoginMutation();
	const updateTokenByLogin = async (args: MutationUpdateTokenByLoginArgs) => {
		await UPDATE_TOKEN_BY_LOGIN({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			storage.setToken(res.data.updateTokenByLogin);
		});
	};

	const [CREATE_USER] = useCreateUserMutation();
	const createUser = async (args: MutationCreateUserArgs) => {
		await CREATE_USER({
			variables: args,
		}).then((res) => {
			if (!res.data || !res.data.createUser.token)
				throw new Error("Response data is undefined");
			storage.setToken(res.data.createUser.token);
		});
	};

	const { client } = useClient();
	const [UPDATE_TOKEN_TO_NULL] = useUpdateTokenToNullMutation();
	const updateTokenToNull = async (args: MutationUpdateTokenToNullArgs) => {
		await UPDATE_TOKEN_TO_NULL({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			storage.clearToken();
			client.clearStore();
		});
	};
	return {
		user,
		loading,
		mutations: { updateTokenByLogin, createUser, updateTokenToNull },
	};
};

export default useAuthOperations;
