import React from "react";
import { Input } from "components/Input/Input";
import { BiSend } from "react-icons/bi";
import { Box } from "components/Box/Box";
import { HStack } from "components/Stack/HStack";

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
