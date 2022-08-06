import React, { ReactNode, useCallback } from "react";
import { theme } from "utils/theme";
import { Center, Container, Text, VStack, Grid } from "components/Elements";
import { useNavigate } from "react-router-dom";

interface Props {
	children: ReactNode;
	page: "Profile" | "Browse" | "Account";
}

export const WallLayout: React.FC<Props> = ({ children, page }) => {
	const list = [
		{ text: "Profile", path: "profile" },
		{ text: "Browse", path: "browse" },
		{ text: "Account", path: "account" },
	];
	const navigate = useNavigate();
	const onClickText = useCallback(
		(path: string) => {
			navigate(`/${path}`);
		},
		[navigate]
	);
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
								key={ele.text}
								cursor="pointer"
								bg={ele.text === page ? "blue.100" : "initial"}
								h={textH}
								lineHeight={textH}
								borderLeft={theme.border}
								borderRight={index === list.length - 1 ? theme.border : ""}
								borderBottom={theme.border}
								textAlign={"center"}
								onClick={() => onClickText(ele.path)}
							>
								{ele.text}
							</Text>
						))}
					</Grid>
					{children}
				</VStack>
			</Center>
		</Container>
	);
};
