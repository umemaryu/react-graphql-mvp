import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { IconContext } from "react-icons";
import { theme } from "utils/theme";
import { ApolloProvider } from "@apollo/client";
import useClient from "hooks/useClient";

type Props = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
	const { client } = useClient();
	return (
		<Suspense fallback={<>Loading</>}>
			<ErrorBoundary
				FallbackComponent={() => (
					<h2>Something went wrong, please reload page</h2>
				)}
			>
				<ChakraProvider>
					<ApolloProvider client={client}>
						<IconContext.Provider
							value={{ color: theme.color.blue, size: "32px" }}
						>
							<Router>{children}</Router>
						</IconContext.Provider>
					</ApolloProvider>
				</ChakraProvider>
			</ErrorBoundary>
		</Suspense>
	);
};
