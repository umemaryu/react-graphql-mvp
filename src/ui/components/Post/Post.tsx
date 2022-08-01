import React from "react";
import { HStack } from "@chakra-ui/react";
import Input from "ui/components/Input/Input";
import { BiSend } from "react-icons/bi";
import { theme } from "utils/theme";
import Box from "ui/components/Box/Box";

const Post: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="Hi!" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<BiSend color={theme.color.blue} size="32px" />
			</Box>
		</HStack>
	);
};

export default Post;
