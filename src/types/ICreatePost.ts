import { CreatePostMutation, MutationCreatePostArgs } from "gql/codegen";

export type ICreatePost = (
	args: MutationCreatePostArgs
) => Promise<CreatePostMutation | null | undefined>;
