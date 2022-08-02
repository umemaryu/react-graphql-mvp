import React from "react";
import Flex from "components/Flex/Flex";
import Spacer from "components/Flex/Spacer";
import Text from "components/Text/Text";
import { theme } from "utils/theme";
import Box from "components/Box/Box";

const UserInfo: React.FC = () => {
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

export default UserInfo;
