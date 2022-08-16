import { useAuth, usePost, useUser } from "interactions";
import { BrowseSection } from "components/Sections";

export const Browse = () => {
	const { models: authModels } = useAuth();
	const { user: sender } = authModels;
	if (!sender) throw new Error("auth data is undefined");

	const { models: userModels, operations: userOperations } = useUser();
	const { operations: postOperations } = usePost();

	const { searchUser } = userOperations;
	const { postOnThread } = postOperations;
	return (
		<BrowseSection
			receiver={userModels.user}
			sender={sender}
			actions={{ searchUser, postOnThread }}
		/>
	);
};
