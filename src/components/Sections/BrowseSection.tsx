import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post, Posts } from "components/Post";
import { Search } from "components/Search";
import { PostOnThread, SearchUser, User } from "types";

type Props = {
	receiver: User | undefined;
	sender: User;
	actions: {
		searchUser: SearchUser;
		postOnThread: PostOnThread;
	};
};

export const BrowseSection: React.FC<Props> = ({
	receiver,
	sender,
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
								sender={sender}
								receiver={receiver}
								queryName="fetchUserByEmail"
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
