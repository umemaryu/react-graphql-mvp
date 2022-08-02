import React from "react";
import { Input } from "components/Input/Input";
import { BiSearchAlt } from "react-icons/bi";
import { Box } from "components/Box/Box";
import { HStack } from "components/Stack/HStack";

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
