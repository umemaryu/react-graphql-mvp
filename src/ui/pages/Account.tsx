import React from "react";
import Box from "ui/components/Box/Box";
import Button from "ui/components/Button/Button";
import WallContainer from "ui/components/Container/WallContainer";
import Form from "ui/components/Form/Form";
import { theme } from "utils/theme";

const Account: React.FC = () => {
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
				<Form list={list} />
				<Button
					onClick={() => {
						console.log("onClick");
					}}
					isFullWidth
					mb={theme.m.md}
				>
					Update Password
				</Button>
				<Button
					onClick={() => {
						console.log("onClick");
					}}
					isFullWidth
				>
					Sign Out
				</Button>
			</Box>
		</WallContainer>
	);
};

export default Account;
