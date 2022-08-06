import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "components/Elements";
import { IconContext } from "react-icons";
import { theme } from "utils/theme";

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<React.Suspense fallback={<Spinner size="xl" />}>
		<ErrorBoundary
			FallbackComponent={() => (
				<h2>Something went wrong, please reload page</h2>
			)}
		>
			<ChakraProvider>
				<IconContext.Provider value={{ color: theme.color.blue, size: "32px" }}>
					<Router>{children}</Router>
				</IconContext.Provider>
			</ChakraProvider>
		</ErrorBoundary>
	</React.Suspense>
);
