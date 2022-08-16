import { useAuth, usePost } from "interactions";
import { Spinner } from "components/Elements";
import { ProfileSection } from "components/Sections";

export const Profile = () => {
	const { models, loading } = useAuth();
	const { operations } = usePost();
	const { postOnThread } = operations;

	if (!models.user) throw new Error("User are undefined");
	if (loading) return <Spinner />;
	return <ProfileSection user={models.user} actions={{ postOnThread }} />;
};
