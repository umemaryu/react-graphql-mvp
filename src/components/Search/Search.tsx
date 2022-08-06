import React from "react";
import { Input, Box, HStack, SearchIcon } from "components/Elements";

export const Search: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="mail@example.com" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<SearchIcon />
			</Box>
		</HStack>
	);
};
