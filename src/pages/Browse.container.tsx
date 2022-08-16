import { useAuth, usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import { useFetchUserByEmailLazyQuery } from "infra/codegen";

type Props = {
	id: number;
};

export const Browse = ({ id }: Props) => {
	const { models } = useAuth();
	const { user } = models;
	if (!user) throw new Error("auth data is undefined");

	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();

	const queryName = "fetchUserByEmail";
	const { operations: postOperations } = usePost({
		user,
		queryName,
	});

	const { postOnThread } = postOperations;
	return (
		<BrowseSection
			id={id}
			user={data?.fetchUserByEmail}
			senderEmail={user.email}
			actions={{ fetchUserByEmail, postOnThread }}
		/>
	);
};
