import { usePost } from "interactions";
import { Spinner } from "components/Elements";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "infra/codegen";

export const Profile = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByToken;
	const queryName = "fetchUserByToken";
	const { models, operations } = usePost({ user, queryName });
	const { postOnThread } = operations;

	if (loading) return <Spinner />;
	return (
		<ProfileSection
			user={data?.fetchUserByToken}
			actions={{ postOnThread }}
			posts={models.posts}
		/>
	);
};
