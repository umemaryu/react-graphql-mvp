import { QueryFetchUserByEmailArgs } from "infra/codegen";

export type FetchUserByEmail = (
	args: QueryFetchUserByEmailArgs
) => Promise<void>;
