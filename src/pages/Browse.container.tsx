import { usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import {
	useFetchUserByEmailLazyQuery,
	useFetchUserByTokenQuery,
} from "infra/codegen";
import { authStore } from "stores/authStore";

export const Browse = () => {
	const id = authStore();
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const { data: authData } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByEmail;
	const kind = "fetchUserByEmail";
	const { models: postModels, operations: postOperations } = usePost({
		user,
		kind,
	});

	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={id}
			user={data}
			senderEmail={authData?.fetchUserByToken.email}
			posts={postModels.posts}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
