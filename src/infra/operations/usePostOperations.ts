import {
	FetchUserByEmailDocument,
	FetchUserByTokenDocument,
	MutationCreatePostArgs,
	useCreatePostMutation,
} from "infra/codegen";
import { cache } from "infra/stores/cache";
import { Post, User } from "types";

type Mutations = {
	createPost: (
		args: MutationCreatePostArgs,
		user: User,
		posts: Post[],
		queryName: "fetchUserByToken" | "fetchUserByEmail"
	) => Promise<void>;
};

export const usePostOperations: () => { mutations: Mutations } = () => {
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost: (
		args: MutationCreatePostArgs,
		user: User,
		posts: Post[],
		queryName: "fetchUserByToken" | "fetchUserByEmail"
	) => Promise<void> = async (args, user, posts, queryName) => {
		await CREATE_POST_MUTATION({
			variables: args,
		}).then((res) => {
			if (!res.data) throw new Error("Response data is undefined");
			const newPost = res.data.createPost;
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
	return { mutations: { createPost } };
};

export default usePostOperations;
