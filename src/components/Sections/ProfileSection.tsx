import React from "react";
import { Box, VStack, Text, Divider } from "components/Elements";
import { ThreadLayout } from "components/Layout";
import { UserInfoList } from "components/List";
import { Post } from "components/Post";
import { theme } from "utils/theme";
import { FetchUserByTokenQuery } from "infra/codegen";
import { Posts } from "components/Post";
import { ICreatePost, Post as IPost } from "types";

type Props = {
	user?: FetchUserByTokenQuery;
	posts: IPost[] | null | undefined;
	actions: {
		createPost: ICreatePost;
	};
};

export const ProfileSection: React.FC<Props> = ({ user, posts, actions }) => {
	return (
		<ThreadLayout page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					{user && <UserInfoList user={user.fetchUserByToken} />}
					<Divider />
					<Text textAlign="center">Write a post to your thread</Text>
					<Posts posts={posts} />
					<Post
						actions={actions}
						senderEmail={user?.fetchUserByToken.email}
						receiverId={user?.fetchUserByToken.id}
						senderId={user?.fetchUserByToken.id}
					/>
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
