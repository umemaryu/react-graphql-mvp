import { useAuth, usePost } from "application";
import { BrowseSection } from "components/Sections";
import {
	useFetchUserByEmailLazyQuery,
	useFetchUserByTokenQuery,
} from "infra/codegen";

export const Browse = () => {
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const { data: authData } = useFetchUserByTokenQuery();
	const posts = data?.fetchUserByEmail.posts;
	const { models: authModels } = useAuth();
	const { models: postModels, operations: postOperations } = usePost(posts);

	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={authModels.id}
			user={data}
			senderEmail={authData?.fetchUserByToken.email}
			posts={postModels.postsState}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
