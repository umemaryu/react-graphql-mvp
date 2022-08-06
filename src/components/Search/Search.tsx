import React from "react";
import { Input, Box, HStack } from "components/Elements";
import { BiSearchAlt } from "react-icons/bi";

export const Search: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="mail@example.com" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<BiSearchAlt cursor={"pointer"} />
			</Box>
		</HStack>
	);
};
