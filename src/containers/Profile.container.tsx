import usePost from "application/usePost";
import { ProfileSection } from "components/Sections";
import {
	CreatePostMutation,
	MutationCreatePostArgs,
	useFetchUserByTokenQuery,
} from "gql/codegen";

export type ProfileActions = {
	actions: {
		createPost: (
			args: MutationCreatePostArgs
		) => Promise<CreatePostMutation | null | undefined>;
	};
};

export const Profile = () => {
	const { data: models } = useFetchUserByTokenQuery();
	const { operations } = usePost({ models });
	const { createPost } = operations;
	return <ProfileSection user={models} actions={{ createPost }} />;
};
