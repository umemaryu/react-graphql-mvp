import React from "react";
import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { Center } from "components/Center/Center";
import { WallContainer } from "components/Container/WallContainer";
import { UserInfo } from "components/List/UserInfo";
import { Post } from "components/Post/Post";
import { VStack } from "components/Stack/VStack";
import { Text } from "components/Text/Text";
import { theme } from "utils/theme";

const Profile: React.FC = () => {
	return (
		<WallContainer page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfo />
					<Text textAlign="center">Write a post to your wall</Text>
					<Post />
					<Center>
						<Button
							onClick={() => {
								console.log("onClick");
							}}
						>
							reload
						</Button>
					</Center>
				</VStack>
			</Box>
		</WallContainer>
	);
};

export default Profile;
