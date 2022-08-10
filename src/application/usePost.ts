import { MutationCreatePostArgs, useCreatePostMutation } from "infra/codegen";
import { useEffect, useState } from "react";
import { Post } from "types";

export const usePost = (posts: Post[] | null | undefined) => {
	const [postsState, setPosts] = useState<Post[] | null | undefined>(posts);

	const [CREATE_POST_MUTATION] = useCreatePostMutation();
	const createPost = async (args: MutationCreatePostArgs) => {
		const res = await CREATE_POST_MUTATION({
			variables: args,
		});
		if (!res || !res.data || !postsState) {
			throw new Error("error!!");
		}
		setPosts([res.data.createPost, ...postsState]);
		return res.data;
	};

	useEffect(() => {
		setPosts(posts);
	}, [posts]);
	return { models: { postsState }, operations: { createPost } };
};
