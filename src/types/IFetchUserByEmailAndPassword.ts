import {
	FetchUserByEmailAndPasswordQuery,
	QueryFetchUserByEmailAndPasswordArgs,
} from "gql/codegen";

export type IFetchUserByEmailAndPassword = (
	args: QueryFetchUserByEmailAndPasswordArgs
) => Promise<FetchUserByEmailAndPasswordQuery | undefined>;
