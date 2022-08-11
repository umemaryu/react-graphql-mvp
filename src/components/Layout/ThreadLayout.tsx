import { ReactNode } from "react";
import { theme } from "utils/theme";
import { Center, Layout, VStack } from "components/Elements";
import { Header } from "components/Header";

type Props = {
	children: ReactNode;
	page: "Profile" | "Browse" | "Account";
};

export const ThreadLayout: React.FC<Props> = ({ children, page }) => {
	return (
		<Layout
			w={theme.w.thread}
			border={theme.border}
			minH={"60vh"}
			mt={theme.m.lg}
		>
			<Center>
				<VStack mb={100}>
					<Header page={page} />
					{children}
				</VStack>
			</Center>
		</Layout>
	);
};
