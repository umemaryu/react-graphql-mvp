import React from "react";
import { Box, Flex, Spacer, Text, VStack } from "components/Elements";
import { FetchUserByTokenQuery } from "gql/codegen";
import { theme } from "utils/theme";
import { timestampToDate } from "utils/timestampToDate";

type Props = {
	user?: FetchUserByTokenQuery;
};

export const Posts: React.FC<Props> = ({ user }) => {
	const posts = user?.fetchUserByToken.posts;
	console.log(posts);
	return (
		<Box>
			{posts?.map((post, index) => {
				const timestamp = post.createdAt * 1000;
				const date = timestampToDate(timestamp);
				return (
					<VStack
						w={theme.w.mobile}
						key={post.id}
						borderTop="1px"
						borderRight="1px"
						borderLeft="1px"
						borderBottom={index === posts.length - 1 ? "1px" : "initial"}
						borderColor={theme.color.gray}
					>
						<Flex w={theme.w.mobile}>
							<Text ml={4}>{post.user.email}</Text>
							<Spacer />
							<Text mr={4}>{date}</Text>
						</Flex>
						<Text w={theme.w.mobile} pl={4}>
							{post.body}
						</Text>
					</VStack>
				);
			})}
		</Box>
	);
};
