import {
	MutationUpdatePasswordArgs,
	QueryFetchUserByEmailArgs,
	useFetchUserByEmailLazyQuery,
	useUpdatePasswordMutation,
} from "gql/codegen";

export const useUser = () => {
	const [FETCH_USER_BY_EMAIL, { data }] = useFetchUserByEmailLazyQuery();
	const fetchUserByEmail = async (args: QueryFetchUserByEmailArgs) => {
		return await FETCH_USER_BY_EMAIL({
			variables: args,
		}).then((res) => res.data);
	};
	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword = async (args: MutationUpdatePasswordArgs) => {
		return await UPDATE_PASSWORD({
			variables: args,
		}).then((res) => {
			return res.data;
		});
	};
	return { models: { data }, operations: { fetchUserByEmail, updatePassword } };
};
