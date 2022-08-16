import {
	MutationUpdatePasswordArgs,
	QueryFetchUserByEmailArgs,
	useFetchUserByEmailLazyQuery,
	useUpdatePasswordMutation,
} from "infra/codegen";
import { User } from "types";

type Models = {
	user: User | undefined;
};

type Queries = {
	fetchUserByEmail: (args: QueryFetchUserByEmailArgs) => Promise<void>;
};

type Mutations = {
	updatePassword: (args: MutationUpdatePasswordArgs) => Promise<void>;
};

export const useUserOperations: () => {
	models: Models;
	queries: Queries;
	mutations: Mutations;
} = () => {
	const [FETCH_USER_BY_EMAIL, { data }] = useFetchUserByEmailLazyQuery();
	const user: User | undefined = data?.fetchUserByEmail;
	const fetchUserByEmail = async (args: QueryFetchUserByEmailArgs) => {
		await FETCH_USER_BY_EMAIL({ variables: args });
	};

	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword = async (args: MutationUpdatePasswordArgs) => {
		await UPDATE_PASSWORD({
			variables: args,
		});
	};
	return {
		models: { user },
		queries: { fetchUserByEmail },
		mutations: { updatePassword },
	};
};

export default useUserOperations;
