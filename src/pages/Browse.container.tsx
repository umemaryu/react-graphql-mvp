import { useAuth, usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import { useFetchUserByEmailLazyQuery } from "infra/codegen";

export const Browse = () => {
	const { models } = useAuth();
	const { user: sender } = models;
	if (!sender) throw new Error("auth data is undefined");

	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const { operations: postOperations } = usePost();

	const { postOnThread } = postOperations;
	return (
		<BrowseSection
			receiver={data?.fetchUserByEmail}
			sender={sender}
			actions={{ fetchUserByEmail, postOnThread }}
		/>
	);
};
