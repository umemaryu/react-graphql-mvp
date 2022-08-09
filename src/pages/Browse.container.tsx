import { useAuth, usePost, useUser } from "application";
import { BrowseSection } from "components/Sections";

export const Browse = () => {
	const { models: authModels } = useAuth();
	const { models: userModels, operations: userOperations } = useUser();
	const { operations: postOperations } = usePost();
	const { fetchUserByEmail } = userOperations;
	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={authModels.id}
			user={userModels.data}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
