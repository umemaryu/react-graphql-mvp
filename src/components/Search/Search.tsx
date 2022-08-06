import React from "react";
import { Input } from "components/Elements/Input/Input";
import { BiSearchAlt } from "react-icons/bi";
import { Box } from "components/Elements/Box/Box";
import { HStack } from "components/Elements/Stack/HStack";

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
