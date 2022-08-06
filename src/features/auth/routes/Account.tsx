import React, { useCallback } from "react";
import { Box, Button, Text } from "components/Elements";
import { theme } from "utils/theme";
import { WallLayout } from "components/Layout";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	const onClickSignOut = useCallback(() => {
		navigate("/login");
	}, [navigate]);

	return (
		<WallLayout page="Account">
			<Box w={theme.w.mobile}>
				{/* <Form list={list} /> */}
				<Button
					onClick={() => {
						console.log("onClick");
					}}
					w={"100%"}
					mb={theme.m.md}
				>
					Update Password
				</Button>
				<Text cursor="pointer" textAlign="center" onClick={onClickSignOut}>
					Sign Out
				</Text>
			</Box>
		</WallLayout>
	);
};
