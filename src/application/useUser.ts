import { useFetchUserByEmailLazyQuery } from "gql/codegen";
import { QueryFetchUserByEmailArgs } from "server/codegen";

export const useUser = () => {
	const [FETCH_USER_BY_EMAIL, { data }] = useFetchUserByEmailLazyQuery();
	const fetchUserByEmail = async (args: QueryFetchUserByEmailArgs) => {
		return await FETCH_USER_BY_EMAIL({
			variables: args,
		}).then((res) => res.data);
	};
	return { models: { data }, operations: { fetchUserByEmail } };
};
