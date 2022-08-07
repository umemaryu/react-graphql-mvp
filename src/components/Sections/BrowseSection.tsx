import React from "react";
import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post } from "components/Post";
import { Search } from "components/Search";
import { FetchUserByEmailQuery } from "gql/codegen";
import { IFetchUserByEmail } from "types";
import { ICreatePost } from "types/ICreatePost";

type Props = {
	user?: FetchUserByEmailQuery | undefined;
} & {
	actions: {
		fetchUserByEmail: IFetchUserByEmail;
		createPost: ICreatePost;
	};
};

export const BrowseSection: React.FC<Props> = ({ user, actions }) => {
	return (
		<ThreadLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfoList user={user?.fetchUserByEmail} />
					<Text textAlign="center">Search the other user by email</Text>
					<Search actions={actions} />
					<Post actions={actions} />
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
