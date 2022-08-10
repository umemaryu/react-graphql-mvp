import { usePost } from "applications";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "infra/codegen";

export const Profile = () => {
	const { data } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByToken;
	const kind = "fetchUserByToken";
	const { models, operations } = usePost({ user, kind });
	const { createPost } = operations;
	return (
		<ProfileSection user={data} actions={{ createPost }} posts={models.posts} />
	);
};
