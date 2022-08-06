import React from "react";
import { Input, Box, HStack } from "components/Elements";
import { BiSend } from "react-icons/bi";

export const Post: React.FC = () => {
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
