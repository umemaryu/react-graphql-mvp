import React from "react";
import WallContainer from "ui/components/Container/WallContainer";
import Box from "ui/components/Box/Box";
import UserInfo from "ui/components/List/UserInfo";
import Text from "ui/components/Text/Text";
import { theme } from "utils/theme";
import Post from "ui/components/Post/Post";
import Search from "ui/components/Search/Search";
import VStack from "ui/components/Stack/VStack";

const Browse: React.FC = () => {
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
