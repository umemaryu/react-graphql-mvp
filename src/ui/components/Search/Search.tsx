import React from "react";
import { HStack } from "@chakra-ui/react";
import Input from "ui/components/Input/Input";
import { BiSearchAlt } from "react-icons/bi";
import { theme } from "utils/theme";
import Box from "ui/components/Box/Box";

const Search: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="mail@example.com" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<BiSearchAlt color={theme.color.blue} size="32px" />
			</Box>
		</HStack>
	);
};

export default Search;
