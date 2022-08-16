import {
	FetchUserByEmailDocument,
	FetchUserByTokenDocument,
	MutationCreatePostArgs,
	useCreatePostMutation,
} from "infra/codegen";
import { cache } from "infra/stores/cache";
import { CreatePost, User } from "types";

type Input = {
	user: User | undefined;
	queryName: "fetchUserByToken" | "fetchUserByEmail";
};

export const usePost = ({ user, queryName }: Input) => {
	const posts = user?.posts;

	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost: CreatePost = async (args: MutationCreatePostArgs) => {
		await CREATE_POST_MUTATION({
			variables: args,
		}).then((res) => {
			if (!posts) throw new Error("Posts are undefined");
			const newPost = res.data?.createPost;
			const query =
				queryName === "fetchUserByToken"
					? FetchUserByTokenDocument
					: FetchUserByEmailDocument;
			cache.updateQuery({ query }, () => ({
				[queryName]: {
					...user,
					posts: [newPost, ...posts],
				},
			}));
		});
	};

	return { models: { posts }, operations: { createPost } };
};
