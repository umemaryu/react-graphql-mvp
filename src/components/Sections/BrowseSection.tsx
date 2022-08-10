import React from "react";
import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post, Posts } from "components/Post";
import { Search } from "components/Search";
import { FetchUserByEmailQuery } from "infra/codegen";
import { CreatePost, FetchUserByEmail, Post as IPost } from "types";

type Props = {
	id: number | undefined;
	user: FetchUserByEmailQuery | undefined;
	senderEmail: string | undefined;
	posts: IPost[] | null | undefined;
	actions: {
		fetchUserByEmail: FetchUserByEmail;
		createPost: CreatePost;
	};
};

export const BrowseSection: React.FC<Props> = ({
	id,
	posts,
	user,
	senderEmail,
	actions,
}) => {
	return (
		<ThreadLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					{!user && (
						<Text textAlign="center">Search the other user by email</Text>
					)}
					<Search actions={actions} />
					{user && <UserInfoList user={user.fetchUserByEmail} />}
					<Posts posts={posts} />
					{user && (
						<Post
							actions={actions}
							senderEmail={senderEmail}
							receiverId={user.fetchUserByEmail.id}
							senderId={id?.toString()}
						/>
					)}
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
