import { MutationCreatePostArgs } from "infra/codegen";
import { User } from "types";

export type PostOnThread = (
	args: MutationCreatePostArgs,
	user: User,
	queryName: "fetchUserByToken" | "fetchUserByEmail"
) => Promise<void>;
