import { QueryFetchUserByEmailArgs } from "infra/codegen";

export type SearchUser = (
	args: QueryFetchUserByEmailArgs
) => Promise<void>;
