import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "gql/codegen";

export const Profile = () => {
	const { data: models } = useFetchUserByTokenQuery();
	return <ProfileSection user={models} />;
};
