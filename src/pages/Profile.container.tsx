import { usePost } from "application";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "gql/codegen";

export const Profile = () => {
	const { data } = useFetchUserByTokenQuery();
	const posts = data?.fetchUserByToken.posts;
	const { models, operations } = usePost(posts);
	const { createPost } = operations;
	return (
		<ProfileSection user={data} actions={{ createPost }} posts={models.posts} />
	);
};
