import { VStack } from "@chakra-ui/react";
import React from "react";
import Box from "ui/components/Box/Box";
import Button from "ui/components/Button/Button";
import Center from "ui/components/Center/Center";
import WallContainer from "ui/components/Container/WallContainer";
import UserInfo from "ui/components/List/UserInfo";
import Post from "ui/components/Post/Post";
import Text from "ui/components/Text/Text";
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
