import { LazyQueryExecFunction } from "@apollo/client";
import { Exact, FetchUserByEmailQuery } from "gql/codegen";

export type IFetchUserByEmail = LazyQueryExecFunction<
	FetchUserByEmailQuery,
	Exact<{
		email: string;
	}>
>;
