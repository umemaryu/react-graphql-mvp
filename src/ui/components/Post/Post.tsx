import React from "react";
import { HStack } from "@chakra-ui/react";
import Button from "ui/components/Button/Button";
import Input from "ui/components/Input/Input";

const Post: React.FC = () => {
	return (
		<HStack>
			<Input placeholder="Hi!" />
			<Button
				onClick={() => {
					console.log("onClick");
				}}
			>
				post
			</Button>
		</HStack>
	);
};

export default Post;
