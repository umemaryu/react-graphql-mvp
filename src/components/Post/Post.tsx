import React from "react";
import { Box, HStack, PostIcon } from "components/Elements";
import { theme } from "utils/theme";
import { Textarea } from "components/Elements/Textarea";

export const Post: React.FC = () => {
	return (
		<HStack
			border="1px"
			borderColor={theme.color.gray}
			w={theme.w.mobile}
			position="fixed"
			bottom="0vh"
			bg={theme.color.white}
		>
			<Textarea placeholder="Hi!" my={2} ml={2} />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<PostIcon />
			</Box>
		</HStack>
	);
};
