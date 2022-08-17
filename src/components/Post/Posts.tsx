import { Box, Flex, Spacer, Text, VStack } from "components/Elements";
import { theme } from "utils/theme";
import { Post } from "types";

type Props = {
	posts: Post[];
};

export const Posts: React.FC<Props> = ({ posts }) => {
	return (
		<Box>
			{posts.map((post, index) => {
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
							<Text ml={4}>{post.senderEmail}</Text>
							<Spacer />
							<Text mr={4}>{post.date}</Text>
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
