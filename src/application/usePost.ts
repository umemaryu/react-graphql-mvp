import { MutationCreatePostArgs, useCreatePostMutation } from "gql/codegen";

export const usePost = () => {
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost = async (args: MutationCreatePostArgs) => {
		return await CREATE_POST_MUTATION({
			variables: args,
		}).then((res) => res.data);
	};
	return { operations: { createPost } };
};
