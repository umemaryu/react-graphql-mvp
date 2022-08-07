import React from "react";
import { Box, VStack, Text, Divider } from "components/Elements";
import { ThreadLayout } from "components/Layout";
import { UserInfoList } from "components/List";
import { Post } from "components/Post";
import { theme } from "utils/theme";
import { FetchUserByTokenQuery } from "gql/codegen";
import { Posts } from "components/Post";

type Props = {
	user?: FetchUserByTokenQuery;
};

export const ProfileSection: React.FC<Props> = ({ user }) => {
	return (
		<ThreadLayout page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfoList user={user} />
					<Divider />
					<Text textAlign="center">Write a post to your thread</Text>
					<Posts user={user} />
					<Post />
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
