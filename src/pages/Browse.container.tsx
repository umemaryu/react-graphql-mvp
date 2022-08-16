import { usePost } from "interactions";
import { BrowseSection } from "components/Sections";
import {
	useFetchUserByEmailLazyQuery,
	useFetchUserByTokenQuery,
} from "infra/codegen";

type Props = {
	id: number;
};

export const Browse = ({ id }: Props) => {
	const { data: authData } = useFetchUserByTokenQuery();
	if (!authData) throw new Error("auth data is undefined");
	const [fetchUserByEmail, { data }] = useFetchUserByEmailLazyQuery();

	const user = data?.fetchUserByEmail;
	const queryName = "fetchUserByEmail";
	const { models: postModels, operations: postOperations } = usePost({
		user,
		queryName,
	});

	const { postOnThread } = postOperations;
	return (
		<BrowseSection
			id={id}
			user={data?.fetchUserByEmail}
			senderEmail={authData.fetchUserByToken.email}
			posts={postModels.posts}
			actions={{ fetchUserByEmail, postOnThread }}
		/>
	);
};
