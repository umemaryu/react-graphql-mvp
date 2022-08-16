import { MutationCreatePostArgs } from "infra/codegen";
import { usePostOperations } from "infra/operations";
import { CreatePost, User } from "types";

export const usePost = () => {
	const { mutations } = usePostOperations();
	const postOnThread: CreatePost = async (
		args: MutationCreatePostArgs,
		user: User,
		queryName: "fetchUserByToken" | "fetchUserByEmail"
	) => {
		await mutations.createPost(args, user, queryName);
	};

	return { operations: { postOnThread } };
};
