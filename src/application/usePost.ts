import {
	FetchUserByEmailDocument,
	FetchUserByTokenDocument,
	MutationCreatePostArgs,
	useCreatePostMutation,
} from "infra/codegen";
import { cache } from "stores/cache";
import { ICreatePost, Post } from "types";

type Input = {
	user:
		| {
				__typename?: "User" | undefined;
				id: string;
				email: string;
				country: string;
				city: string;
				nickName: string;
				posts?: Post[] | null | undefined;
		  }
		| undefined;
	kind: "fetchUserByToken" | "fetchUserByEmail";
};

export const usePost = ({ user, kind }: Input) => {
	const posts = user?.posts;
	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost: ICreatePost = async (args: MutationCreatePostArgs) => {
		const res = await CREATE_POST_MUTATION({
			variables: args,
		});
		if (!res || !res.data || !user || !posts) {
			throw new Error("error!!");
		}
		const post = res.data.createPost;
		const query =
			kind === "fetchUserByToken"
				? FetchUserByTokenDocument
				: FetchUserByEmailDocument;
		switch (kind) {
			case "fetchUserByToken":
				cache.updateQuery({ query }, () => ({
					fetchUserByToken: {
						...user,
						posts: [post, ...posts],
					},
				}));
				break;
			case "fetchUserByEmail":
				cache.updateQuery({ query }, () => ({
					fetchUserByEmail: {
						...user,
						posts: [post, ...posts],
					},
				}));
				break;
		}
	};

	return { models: { posts }, operations: { createPost } };
};
