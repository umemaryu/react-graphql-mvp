import React from "react";
import { Box, Button, Center, VStack, Text } from "components/Elements";
import { WallLayout } from "components/Layout";
import { UserInfoList } from "components/List";
import { Post } from "components/Post";
import { theme } from "utils/theme";
import { FetchUserByTokenQuery } from "gql/codegen";

type Props = {
	user?: FetchUserByTokenQuery;
};

export const ProfileSection: React.FC<Props> = ({ user }) => {
	return (
		<WallLayout page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfoList user={user} />
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
		</WallLayout>
	);
};
