import React, { Fragment } from "react";
import { Flex, Spacer, Text, Box } from "components/Elements";
import { theme } from "utils/theme";

type Props = {
	user:
		| {
				email: string;
				country: string;
				city: string;
				nickName: string;
		  }
		| undefined;
};

export const UserInfoList: React.FC<Props> = ({ user }) => {
	const list = [
		{
			id: "nickName",
			text: "Nick name",
		},
		{
			id: "country",
			text: "Country",
		},
		{
			id: "city",
			text: "City",
		},
		{
			id: "email",
			text: "Email",
		},
	];

	return (
		<Box>
			{list.map((ele) => (
				<Fragment key={ele.id}>
					{user && (
						<Flex w={theme.w.mobile}>
							<Text fontSize={theme.fs.normal}>{ele.text}</Text>
							<Spacer />
							<Text>
								{user[ele.id as "nickName" | "country" | "city" | "email"]}
							</Text>
						</Flex>
					)}
				</Fragment>
			))}
		</Box>
	);
};
