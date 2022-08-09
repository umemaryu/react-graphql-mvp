import { useAuth, usePost } from "application";
import { BrowseSection } from "components/Sections";
import { useFetchUserByEmailLazyQuery } from "gql/codegen";

export const Browse = () => {
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const posts = data?.fetchUserByEmail.posts;
	const { models: authModels } = useAuth();
	const { models: postModels, operations: postOperations } = usePost(posts);

	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={authModels.id}
			user={data}
			posts={postModels.posts}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
