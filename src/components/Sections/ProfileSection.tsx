import React from "react";
import { Box, VStack, Text, Divider } from "components/Elements";
import { ThreadLayout } from "components/Layout";
import { UserInfoList } from "components/List";
import { Post } from "components/Post";
import { theme } from "utils/theme";
import { FetchUserByTokenQuery } from "gql/codegen";
import { Posts } from "components/Post";
import { ICreatePost } from "types";

type Props = {
	user?: FetchUserByTokenQuery;
} & {
	actions: {
		createPost: ICreatePost;
	};
};

export const ProfileSection: React.FC<Props> = ({ user, actions }) => {
	return (
		<ThreadLayout page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfoList user={user?.fetchUserByToken} />
					<Divider />
					<Text textAlign="center">Write a post to your thread</Text>
					<Posts user={user} />
					<Post
						actions={actions}
						receiverId={user?.fetchUserByToken.id}
						senderId={user?.fetchUserByToken.id}
					/>
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
