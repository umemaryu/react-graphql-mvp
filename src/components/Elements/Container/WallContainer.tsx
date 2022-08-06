import React, { ReactNode } from "react";
import { theme } from "utils/theme";
import { Center } from "components/Elements/Center/Center";
import { Container } from "components/Elements/Container/Container";
import { Text } from "components/Elements/Text/Text";
import { VStack } from "components/Elements/Stack/VStack";
import { Grid } from "components/Elements/Grid/Grid";

interface Props {
	children: ReactNode;
	page: "Profile" | "Browse" | "Account";
}

export const WallContainer: React.FC<Props> = ({ children, page }) => {
	const list = ["Profile", "Browse", "Account"];
	const textH = "40px";
	return (
		<Container
			w={theme.w.wall}
			border={theme.border}
			h={"60vh"}
			mt={theme.m.lg}
		>
			<Center>
				<VStack mb={100}>
					<Grid templateColumns="repeat(3, 1fr)" w={theme.w.wall}>
						{list.map((ele, index) => (
							<Text
								key={ele}
								cursor="pointer"
								bg={ele === page ? "blue.100" : "initial"}
								h={textH}
								lineHeight={textH}
								borderLeft={theme.border}
								borderRight={index === list.length - 1 ? theme.border : ""}
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