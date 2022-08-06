import React from "react";
import { Flex, Spacer, Text, Box } from "components/Elements";
import { theme } from "utils/theme";

export const UserInfo: React.FC = () => {
	const list = ["Nick name", "Country", "City", "Email"];
	return (
		<Box>
			{list.map((ele) => (
				<Flex w={theme.w.mobile} key={ele}>
					<Text fontSize={theme.fs.normal}>{ele}</Text>
					<Spacer />
					<Text>info</Text>
				</Flex>
			))}
		</Box>
	);
};
