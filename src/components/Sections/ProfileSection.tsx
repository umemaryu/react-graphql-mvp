import { Box, VStack, Text, Divider } from "components/Elements";
import { ThreadLayout } from "components/Layout";
import { UserInfoList } from "components/List";
import { Post } from "components/Post";
import { theme } from "utils/theme";
import { Posts } from "components/Post";
import { CreatePost, User } from "types";

type Props = {
	user: User;
	actions: {
		postOnThread: CreatePost;
	};
};

export const ProfileSection: React.FC<Props> = ({ user, actions }) => {
	return (
		<ThreadLayout page="Profile">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<Text textAlign="center">Write a post to your thread</Text>
					<UserInfoList user={user} /> <Divider />
					<Posts posts={user.posts} />
					<Post
						actions={actions}
						senderEmail={user.email}
						receiverId={user.id}
						senderId={user.id}
					/>
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
