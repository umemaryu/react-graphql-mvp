import { LazyQueryExecFunction } from "@apollo/client";
import { Exact, FetchUserByEmailQuery } from "infra/codegen";

export type FetchUserByEmail = LazyQueryExecFunction<
	FetchUserByEmailQuery,
	Exact<{
		email: string;
	}>
>;
