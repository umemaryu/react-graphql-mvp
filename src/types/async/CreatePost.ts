import { MutationCreatePostArgs } from "infra/codegen";
import { User } from "types";

export type CreatePost = (
	args: MutationCreatePostArgs,
	user: User,
	queryName: "fetchUserByToken" | "fetchUserByEmail"
) => Promise<void>;
