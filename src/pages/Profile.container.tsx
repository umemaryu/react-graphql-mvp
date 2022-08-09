import { useAuth, usePost } from "application";
import { ProfileSection } from "components/Sections";

export const Profile = () => {
	const { models } = useAuth();
	const data = models.data;
	const { operations } = usePost();
	const { createPost } = operations;
	return <ProfileSection user={data} actions={{ createPost }} />;
};
