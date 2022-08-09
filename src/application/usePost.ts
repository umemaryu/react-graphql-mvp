import { MutationCreatePostArgs, useCreatePostMutation } from "gql/codegen";
import { Post } from "types";

export const usePost = (posts: Post[] | null | undefined) => {
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost = async (args: MutationCreatePostArgs) => {
		return await CREATE_POST_MUTATION({
			variables: args,
		}).then((res) => res.data);
	};
	return { models: { posts }, operations: { createPost } };
};
