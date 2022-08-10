import {
	FetchUserByTokenQuery,
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useUpdateTokenByLoginMutation,
	useUpdateTokenToNullMutation,
} from "infra/codegen";
import useClient from "hooks/useClient";
import { useCallback } from "react";
import { authStore } from "stores/authStore";
import storage from "utils/storage";
import { CreateUser, UpdateTokenByLogin, UpdateTokenToNull } from "types";

export const useAuth = (data?: FetchUserByTokenQuery | undefined) => {
	if (data) {
		const id = parseInt(data.fetchUserByToken.id);
		authStore(id);
	}
	const id = authStore();

	const [UPDATE_TOKEN_BY_LOGIN] = useUpdateTokenByLoginMutation();
	const updateTokenByLogin: UpdateTokenByLogin = useCallback(
		async (args: MutationUpdateTokenByLoginArgs) => {
			const res = await UPDATE_TOKEN_BY_LOGIN({ variables: args });
			if (res.data && res.data.updateTokenByLogin) {
				storage.setToken(res.data.updateTokenByLogin);
			}
		},
		[UPDATE_TOKEN_BY_LOGIN]
	);

	const [CREATE_USER] = useCreateUserMutation();
	const createUser: CreateUser = async (args: MutationCreateUserArgs) => {
		const res = await CREATE_USER({
			variables: args,
		});
		if (res.data && res.data.createUser) {
			storage.setToken(res.data.createUser);
		}
	};

	const { client } = useClient();
	const [UPDATE_TOKEN_TO_NULL] = useUpdateTokenToNullMutation();
	const updateTokenToNull: UpdateTokenToNull = async (
		args: MutationUpdateTokenToNullArgs
	) => {
		const res = await UPDATE_TOKEN_TO_NULL({
			variables: args,
		});
		if (res.data && res.data.updateTokenToNull) {
			storage.clearToken();
			client.clearStore();
		}
	};

	return {
		models: { id },
		operations: { createUser, updateTokenToNull, updateTokenByLogin },
	};
};
