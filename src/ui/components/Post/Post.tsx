import React from "react";
import Input from "ui/components/Input/Input";
import { BiSend } from "react-icons/bi";
import Box from "ui/components/Box/Box";
import HStack from "ui/components/Stack/HStack";

const Post: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="Hi!" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<BiSend cursor={"pointer"} />
			</Box>
		</HStack>
	);
};

export default Post;
