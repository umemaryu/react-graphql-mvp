import React from "react";
import { Box, Flex, Spacer, Text, VStack } from "components/Elements";
import { theme } from "utils/theme";
import { timestampToDate } from "utils/timestampToDate";
import { Post } from "types";

type Props = {
	posts: Post[] | undefined | null;
};

export const Posts: React.FC<Props> = ({ posts }) => {
	if (!posts) return null;
	const postsForSort = [...posts];
	postsForSort.sort((a, b) => b.createdAt - a.createdAt);
	return (
		<Box>
			{postsForSort.map((post, index) => {
				const timestamp = post.createdAt * 1000;
				const date = timestampToDate(timestamp);
				return (
					<VStack
						w={theme.w.mobile}
						key={post.id}
						borderTop="1px"
						borderRight="1px"
						borderLeft="1px"
						borderBottom={index === postsForSort.length - 1 ? "1px" : "initial"}
						borderColor={theme.color.gray}
					>
						<Flex w={theme.w.mobile}>
							<Text ml={4}>{post.senderEmail}</Text>
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
