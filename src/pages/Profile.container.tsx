import { usePost } from "interactions";
import { Spinner } from "components/Elements";
import { ProfileSection } from "components/Sections";
import { useFetchUserByTokenQuery } from "infra/codegen";

export const Profile = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	const user = data?.fetchUserByToken;
	if (!user) throw new Error("User are undefined");
	const queryName = "fetchUserByToken";
	const { operations } = usePost({ user, queryName });
	const { postOnThread } = operations;

	if (loading) return <Spinner />;
	return (
		<ProfileSection user={data.fetchUserByToken} actions={{ postOnThread }} />
	);
};
