import { useAuth, usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import {
	useFetchUserByEmailLazyQuery,
	useFetchUserByTokenQuery,
} from "infra/codegen";

export const Browse = () => {
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const { data: authData } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByEmail;
	const kind = "fetchUserByEmail";
	const { models: postModels, operations: postOperations } = usePost({
		user,
		kind,
	});

	const { models: authModels } = useAuth();
	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={authModels.id}
			user={data}
			senderEmail={authData?.fetchUserByToken.email}
			posts={postModels.posts}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
