import { ThreadLayout } from "components/Layout";
import { Box, Text, VStack } from "components/Elements";
import { UserInfoList } from "components/List";
import { theme } from "utils/theme";
import { Post, Posts } from "components/Post";
import { Search } from "components/Search";
import { CreatePost, FetchUserByEmail, Post as IPost, User } from "types";

type Props = {
	id: number | undefined;
	user: User | undefined;
	senderEmail: string | undefined;
	posts: IPost[] | null | undefined;
	actions: {
		fetchUserByEmail: FetchUserByEmail;
		postOnThread: CreatePost;
	};
};

export const BrowseSection: React.FC<Props> = ({
	id,
	posts,
	user,
	senderEmail,
	actions,
}) => {
	return (
		<ThreadLayout page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					{user ? (
						<>
							<Search actions={actions} />
							<UserInfoList user={user} />
							<Posts posts={posts} />
							<Post
								actions={actions}
								senderEmail={senderEmail}
								receiverId={user.id}
								senderId={id?.toString()}
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
