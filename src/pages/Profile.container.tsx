import { usePost } from "applications";
import { Spinner } from "components/Elements";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "infra/codegen";

export const Profile = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByToken;
	const kind = "fetchUserByToken";
	const { models, operations } = usePost({ user, kind });
	const { createPost } = operations;

	if (loading) return <Spinner />;
	return (
		<ProfileSection user={data} actions={{ createPost }} posts={models.posts} />
	);
};
