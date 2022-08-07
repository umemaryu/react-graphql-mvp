import React from "react";
import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post } from "components/Post";
import { Search } from "components/Search";

export const BrowseSection: React.FC = () => {
	return (
		<ThreadLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfoList />
					<Text textAlign="center">Search the other user by email</Text>
					<Search />
					<Post />
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
