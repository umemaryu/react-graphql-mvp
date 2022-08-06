import React from "react";
import { WallContainer } from "components/Container/WallContainer";
import { Box } from "components/Elements/Box/Box";
import { UserInfo } from "components/List/UserInfo";
import { Text } from "components/Elements/Text/Text";
import { theme } from "utils/theme";
import { Post } from "components/Post/Post";
import { Search } from "components/Search/Search";
import { VStack } from "components/Elements/Stack/VStack";

export const Browse: React.FC = () => {
	return (
		<WallContainer page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfo />
					<Text textAlign="center">Search the other user by email</Text>
					<Search />
					<Post />
				</VStack>
			</Box>
		</WallContainer>
	);
};

export default Browse;
