import React from "react";
import { Input } from "components/Elements/Input/Input";
import { BiSend } from "react-icons/bi";
import { Box } from "components/Elements/Box/Box";
import { HStack } from "components/Elements/Stack/HStack";

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
