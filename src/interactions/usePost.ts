import { MutationCreatePostArgs } from "infra/codegen";
import usePostOperations from "infra/operations/usePostOperations";
import { CreatePost, User } from "types";

type Input = {
	user: User | undefined;
	queryName: "fetchUserByToken" | "fetchUserByEmail";
};

export const usePost = ({ user, queryName }: Input) => {
	const { mutations } = usePostOperations();
	const postOnThread: CreatePost = async (args: MutationCreatePostArgs) => {
		if (!user) throw new Error("user is undefined");
		await mutations.createPost(args, user, queryName);
	};

	return { operations: { postOnThread } };
};
