import React from "react";
import { Flex } from "components/Elements/Flex/Flex";
import { Spacer } from "components/Elements/Flex/Spacer";
import { Text } from "components/Elements/Text/Text";
import { theme } from "utils/theme";
import { Box } from "components/Elements/Box/Box";

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
