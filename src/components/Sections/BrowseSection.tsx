import React from "react";
import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post } from "components/Post";
import { Search } from "components/Search";
import {
	CreatePostMutation,
	FetchUserByEmailQuery,
	MutationCreatePostArgs,
	QueryFetchUserByEmailArgs,
} from "gql/codegen";

type Props = {
	user?: FetchUserByEmailQuery | undefined;
} & {
	actions: {
		fetchUserByEmail: (
			args: QueryFetchUserByEmailArgs
		) => Promise<FetchUserByEmailQuery | undefined>;
		createPost: (
			args: MutationCreatePostArgs
		) => Promise<CreatePostMutation | null | undefined>;
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
					<Post />
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
