import {
	MutationCreateUserArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useUpdateTokenByLoginMutation,
	useUpdateTokenToNullMutation,
} from "gql/codegen";
import useClient from "hooks/useClient";
import { useCallback } from "react";
import { authStore } from "stores";
import storage from "utils/storage";

export const useAuth = () => {
	const { client } = useClient();

	const [UPDATE_TOKEN_BY_LOGIN] = useUpdateTokenByLoginMutation();
	const updateTokenByLogin = useCallback(
		async (args: MutationUpdateTokenByLoginArgs) => {
			return await UPDATE_TOKEN_BY_LOGIN({ variables: args }).then((res) => {
				if (res.data && res.data.updateTokenByLogin) {
					storage.setToken(res.data.updateTokenByLogin);
				}
				return res.data;
			});
		},
		[UPDATE_TOKEN_BY_LOGIN]
	);

	const [CREATE_USER] = useCreateUserMutation();
	const createUser = async (args: MutationCreateUserArgs) => {
		return await CREATE_USER({
			variables: args,
		}).then((res) => {
			if (res.data && res.data.createUser)
				storage.setToken(res.data.createUser);
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
				client.clearStore();
				authStore(undefined);
			}
			return res.data;
		});
	};

	return {
		operations: { createUser, updateTokenToNull, updateTokenByLogin },
	};
};
