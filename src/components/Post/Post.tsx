import React from "react";
import { Input, Box, HStack, PostIcon } from "components/Elements";

export const Post: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="Hi!" />
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
