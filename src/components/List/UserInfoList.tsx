import React, { Fragment } from "react";
import { Flex, Spacer, Text, Box } from "components/Elements";
import { theme } from "utils/theme";
import { FetchUserByTokenQuery } from "gql/codegen";

type Props = {
	user?: FetchUserByTokenQuery;
};

export const UserInfoList: React.FC<Props> = ({ user }) => {
	const userInfo = user?.fetchUserByToken;
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
					{userInfo && (
						<Flex w={theme.w.mobile}>
							<Text fontSize={theme.fs.normal}>{ele.text}</Text>
							<Spacer />
							<Text>
								{userInfo[ele.id as "nickName" | "country" | "city" | "email"]}
							</Text>
						</Flex>
					)}
				</Fragment>
			))}
		</Box>
	);
};
