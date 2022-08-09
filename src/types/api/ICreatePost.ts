import { CreatePostMutation, MutationCreatePostArgs } from "infra/codegen";

export type ICreatePost = (
	args: MutationCreatePostArgs
) => Promise<CreatePostMutation | null | undefined>;
