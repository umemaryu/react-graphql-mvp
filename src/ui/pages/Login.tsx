import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import Box from "ui/components/Box/Box";
import Button from "ui/components/Button/Button";
import Center from "ui/components/Center/Center";
import Container from "ui/components/Container/Container";
import Divider from "ui/components/Divider/Divider";
import { FormHelperText } from "ui/components/Form/FormHelperText";
import Input from "ui/components/Input/Input";
import VStack from "ui/components/Stack/VStack";
import Text from "ui/components/Text/Text";
import { theme } from "utils/theme";

const Login: React.FC = () => {
	const list = [
		{ text: "Email", type: "email", placeholder: "mail@example.com" },
		{ text: "Password", type: "password", placeholder: "abc123" },
	];
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>Login</Text>
				<Container borderRadius={theme.borderRadius.md} border={theme.border}>
					<FormControl>
						{list.map((ele) => (
							<Box mt={theme.m.sm} mb={theme.m.sm}>
								<FormLabel>{ele.text}</FormLabel>
								<Input {...ele} />
							</Box>
						))}
						<Box mt={theme.m.sm} mb={theme.m.sm}>
							<FormHelperText>Wrong something.</FormHelperText>
						</Box>
					</FormControl>
					<Button
						isFullWidth
						mb={theme.m.sm}
						onClick={() => {
							console.log("onClick");
						}}
					>
						Login
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={() => {
								console.log("onClick");
							}}
						>
							Sign up
						</Text>
					</Box>
				</Container>
			</VStack>
		</Center>
	);
};

export default Login;
