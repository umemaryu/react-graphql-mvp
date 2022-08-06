import React, { useCallback } from "react";
import { Box } from "components/Elements/Box/Box";
import { Button } from "components/Elements/Button/Button";
import { Form } from "components/Form";
import { Text } from "components/Elements/Text/Text";
import { theme } from "utils/theme";
import { WallContainer } from "components/Container";

export const Account: React.FC = () => {
	const list = [
		{
			text: "New password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
		{
			text: "Old password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
	];

	return (
		<WallContainer page="Account">
			<Box w={theme.w.mobile}>
				{/* <Form list={list} /> */}
				<Button
					onClick={() => {
						console.log("onClick");
					}}
					isFullWidth
					mb={theme.m.md}
				>
					Update Password
				</Button>
				<Text cursor="pointer" textAlign="center">
					Sign Out
				</Text>
			</Box>
		</WallContainer>
	);
};
