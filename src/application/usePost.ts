import {
	FetchUserByTokenQuery,
	MutationCreatePostArgs,
	useCreatePostMutation,
} from "gql/codegen";

type Input = { models: FetchUserByTokenQuery | undefined };

const usePost = ({ models }: Input) => {
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost = async (args: MutationCreatePostArgs) => {
		try {
			return await CREATE_POST_MUTATION({
				variables: args,
			}).then((res) => res.data);
		} catch (e) {
			console.log(e);
		}
	};
	return { operations: { createPost } };
};

export default usePost;
