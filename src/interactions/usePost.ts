import { MutationCreatePostArgs } from "infra/codegen";
import usePostOperations from "infra/operations/usePostOperations";
import { CreatePost, User } from "types";

type Input = {
	user: User | undefined;
	queryName: "fetchUserByToken" | "fetchUserByEmail";
};

export const usePost = ({ user, queryName }: Input) => {
	const posts = user?.posts;
	const { mutations } = usePostOperations();
	const postOnThread: CreatePost = async (args: MutationCreatePostArgs) => {
		if (!posts) throw new Error("Posts are undefined");
		await mutations.createPost(args, user, posts, queryName);
	};

	return { models: { posts }, operations: { postOnThread } };
};
