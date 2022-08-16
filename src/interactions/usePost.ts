import { MutationCreatePostArgs } from "infra/codegen";
import usePostOperations from "infra/operations/usePostOperations";
import { CreatePost, User } from "types";

type Input = {
	user: User | undefined;
	queryName: "fetchUserByToken" | "fetchUserByEmail";
};

export const usePost = ({ user, queryName }: Input) => {
	if (!user) throw new Error("user is undefined");
	const posts = user.posts;
	const { mutations } = usePostOperations();
	const postOnThread: CreatePost = async (args: MutationCreatePostArgs) => {
		await mutations.createPost(args, user, posts, queryName);
	};

	return { models: { posts }, operations: { postOnThread } };
};
