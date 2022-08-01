import React from "react";
import Input from "ui/components/Input/Input";
import { BiSearchAlt } from "react-icons/bi";
import Box from "ui/components/Box/Box";
import HStack from "ui/components/Stack/HStack";

const Search: React.FC = () => {
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

export default Search;
