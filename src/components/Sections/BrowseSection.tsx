import React from "react";
import { WallLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfo } from "components/List";
import { theme } from "utils/theme";
import { Post } from "components/Post";
import { Search } from "components/Search";

export const BrowseSection: React.FC = () => {
	return (
		<WallLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfo />
					<Text textAlign="center">Search the other user by email</Text>
					<Search />
					<Post />
				</VStack>
			</Box>
		</WallLayout>
	);
};
