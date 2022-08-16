import { useAuth, usePost } from "interactions";
import { Spinner } from "components/Elements";
import { ProfileSection } from "components/Sections";

export const Profile = () => {
	const { models, loading } = useAuth();
	const { user } = models;
	if (!user) throw new Error("User are undefined");
	const queryName = "fetchUserByToken";
	const { operations } = usePost({ user, queryName });
	const { postOnThread } = operations;

	if (loading) return <Spinner />;
	return <ProfileSection user={user} actions={{ postOnThread }} />;
};
