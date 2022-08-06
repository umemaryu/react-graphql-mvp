import React from "react";
import { Box, Button, Center, VStack, Text } from "components/Elements";
import { WallContainer } from "components/Container";
import { UserInfo } from "components/List";
import { Post } from "components/Post";
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
