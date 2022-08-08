import { usePost } from "application";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "gql/codegen";

export const Profile = () => {
	const { data } = useFetchUserByTokenQuery();
	const { operations } = usePost({ data });
	const { createPost } = operations;
	return <ProfileSection user={data} actions={{ createPost }} />;
};
