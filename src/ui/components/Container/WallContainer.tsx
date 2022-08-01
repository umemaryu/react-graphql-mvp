import React, { ReactNode } from "react";
import { theme } from "utils/theme";
import Center from "ui/components/Center/Center";
import Container from "ui/components/Container/Container";
import Text from "ui/components/Text/Text";
import VStack from "ui/components/Stack/VStack";
import Grid from "ui/components/Grid/Grid";

interface Props {
	children: ReactNode;
	page: "Profile" | "Browse" | "Account";
}

const WallContainer: React.FC<Props> = ({ children, page }) => {
	const list = ["Profile", "Browse", "Account"];
	const w = "40vw";
	const textH = "40px";
	return (
		<Container w={w} border={theme.border} h={"60vh"} mt={theme.m.lg}>
			<Center>
				<VStack mb={100} w={theme.w.mobile}>
					<Grid templateColumns="repeat(3, 1fr)" w={w}>
						{list.map((ele, index) => (
							<Text
								key={ele}
								bg={ele === page ? "blue.100" : "initial"}
								h={textH}
								lineHeight={textH}
								borderLeft={theme.border}
								borderRight={index == list.length - 1 ? theme.border : ""}
								borderBottom={theme.border}
								textAlign={"center"}
							>
								{ele}
							</Text>
						))}
					</Grid>
					{children}
				</VStack>
			</Center>
		</Container>
	);
};

export default WallContainer;
