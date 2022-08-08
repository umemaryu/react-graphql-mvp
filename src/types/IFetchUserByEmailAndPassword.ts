import { FetchUserByEmailAndPasswordQuery } from "gql/codegen";

export type IFetchUserByEmailAndPassword = () => Promise<
	FetchUserByEmailAndPasswordQuery | undefined
>;
