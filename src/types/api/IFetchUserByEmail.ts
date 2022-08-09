import { LazyQueryExecFunction } from "@apollo/client";
import { Exact, FetchUserByEmailQuery } from "infra/codegen";

export type IFetchUserByEmail = LazyQueryExecFunction<
	FetchUserByEmailQuery,
	Exact<{
		email: string;
	}>
>;
