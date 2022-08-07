import { FetchUserByEmailQuery, QueryFetchUserByEmailArgs } from "gql/codegen";

export type IFetchUserByEmail = (
	args: QueryFetchUserByEmailArgs
) => Promise<FetchUserByEmailQuery | undefined>;
