import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post, Posts } from "components/Post";
import { Search } from "components/Search";
import { CreatePost, FetchUserByEmail, User } from "types";

type Props = {
	id: number;
	receiver: User | undefined;
	senderEmail: string;
	actions: {
		fetchUserByEmail: FetchUserByEmail;
		postOnThread: CreatePost;
	};
};

export const BrowseSection: React.FC<Props> = ({
	id,
	receiver,
	senderEmail,
	actions,
}) => {
	return (
		<ThreadLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					{receiver ? (
						<>
							<Search actions={actions} />
							<UserInfoList user={receiver} />
							<Posts posts={receiver.posts} />
							<Post
								actions={actions}
								senderEmail={senderEmail}
								receiverId={receiver.id}
								senderId={id.toString()}
							/>
						</>
					) : (
						<>
							<Text textAlign="center">Search the other user by email</Text>
							<Search actions={actions} />
						</>
					)}
				</VStack>
			</Box>
		</ThreadLayout>
	);
};
