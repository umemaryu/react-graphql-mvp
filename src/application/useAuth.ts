import {
	MutationCreateUserArgs,
	MutationUpdateTokenToNullArgs,
	useCreateUserMutation,
	useFetchUserByTokenLazyQuery,
	useUpdateTokenToNullMutation,
} from "gql/codegen";
import useClient from "hooks/useClient";
import { useCallback, useEffect } from "react";
import { authStore } from "stores";
import storage from "utils/storage";

export const useAuth = () => {
	const { client } = useClient();
	const [FETCH_USER_BY_TOKEN, { data }] = useFetchUserByTokenLazyQuery();
	const fetchUserByToken = useCallback(async () => {
		return await FETCH_USER_BY_TOKEN().then((res) => {
			if (res.data) authStore(parseInt(res.data.fetchUserByToken.id));
			return res.data;
		});
	}, [FETCH_USER_BY_TOKEN]);

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
				client.resetStore();
			}
			return res.data;
		});
	};

	useEffect(() => {
		fetchUserByToken();
	}, [fetchUserByToken]);

	return { models: { data }, operations: { createUser, updateTokenToNull } };
};
