import { usePost } from "application";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "gql/codegen";

export const Profile = () => {
	const { data: models } = useFetchUserByTokenQuery();
	const { operations } = usePost({ models });
	const { createPost } = operations;
	return <ProfileSection user={models} actions={{ createPost }} />;
};
