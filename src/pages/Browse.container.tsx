import { useAuth, usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import { useFetchUserByEmailLazyQuery } from "infra/codegen";

type Props = {
	id: number;
};

export const Browse = ({ id }: Props) => {
	const { models } = useAuth();
	const { user: sender } = models;
	if (!sender) throw new Error("auth data is undefined");

	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();
	const receiver = data?.fetchUserByEmail;
	const queryName = "fetchUserByEmail";
	const { operations: postOperations } = usePost({
		user: receiver,
		queryName,
	});

	const { postOnThread } = postOperations;
	return (
		<BrowseSection
			id={id}
			receiver={receiver}
			senderEmail={sender.email}
			actions={{ fetchUserByEmail, postOnThread }}
		/>
	);
};
