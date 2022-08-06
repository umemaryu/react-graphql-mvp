import React, { ReactNode } from "react";
import { theme } from "utils/theme";
import { Center, Layout, VStack } from "components/Elements";
import { Header } from "components/Header";

type Props = {
	children: ReactNode;
	page: "Profile" | "Browse" | "Account";
};

export const WallLayout: React.FC<Props> = ({ children, page }) => {
	return (
		<Layout w={theme.w.wall} border={theme.border} h={"60vh"} mt={theme.m.lg}>
			<Center>
				<Header page={page} />
				<VStack mb={100}>{children}</VStack>
			</Center>
		</Layout>
	);
};
