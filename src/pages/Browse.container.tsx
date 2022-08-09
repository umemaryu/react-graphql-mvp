import { useAuth, usePost } from "application";
import { BrowseSection } from "components/Sections";
import { useFetchUserByEmailLazyQuery } from "gql/codegen";

export const Browse = () => {
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const { models: authModels } = useAuth();
	const { operations: postOperations } = usePost();

	const { createPost } = postOperations;
	return (
		<BrowseSection
			id={authModels.id}
			user={data}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
