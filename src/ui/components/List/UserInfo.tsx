import React from "react";
import Flex from "ui/components/Flex/Flex";
import Spacer from "ui/components/Flex/Spacer";
import Text from "ui/components/Text/Text";
import { theme } from "utils/theme";

interface Props {}

const UserInfo: React.FC<Props> = ({}) => {
	const list = ["First name", "Country", "City", "Email"];
	return (
		<>
			{list.map((ele) => (
				<Flex w={theme.w.mobile} key={ele}>
					<Text fontSize={theme.fs.normal}>{ele}</Text>
					<Spacer />
					<Text>info</Text>
				</Flex>
			))}
		</>
	);
};

export default UserInfo;
