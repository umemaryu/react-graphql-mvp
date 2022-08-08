import {
	FetchUserByTokenQuery,
	MutationCreatePostArgs,
	useCreatePostMutation,
} from "gql/codegen";

type Input = {
	data?: FetchUserByTokenQuery;
};

export const usePost = ({ data }: Input) => {
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost = async (args: MutationCreatePostArgs) => {
		return await CREATE_POST_MUTATION({
			variables: args,
		}).then((res) => res.data);
	};
	return { operations: { createPost } };
};
