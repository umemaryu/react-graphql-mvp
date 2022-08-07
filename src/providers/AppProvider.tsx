import { ChakraProvider } from "@chakra-ui/react";
import { useMemo, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "components/Elements";
import { IconContext } from "react-icons";
import { theme } from "utils/theme";
import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import storage from "utils/storage";

type AppProviderProps = {
	children: React.ReactNode;
};

type Props = {
	children: React.ReactNode;
};

const CustomApolloProvider: React.FC<Props> = ({ children }) => {
	const devURL = "http://localhost:4000/";
	const httpLink = useMemo(() => {
		return createHttpLink({
			uri: devURL,
			credentials: "same-origin",
		});
	}, []);
	const authLink = useMemo(() => {
		return setContext((_, { headers }) => {
			const token = storage.getToken();
			return {
				headers: {
					...headers,
					authorization: token ? `Bearer ${token}` : "",
				},
			};
		});
	}, []);

	const client = useMemo(() => {
		return new ApolloClient({
			link: ApolloLink.from([authLink, httpLink]),
			cache: new InMemoryCache(),
			connectToDevTools: true,
			defaultOptions: {
				watchQuery: {
					fetchPolicy: "cache-and-network",
				},
			},
		});
	}, [httpLink, authLink]);
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<Suspense fallback={<Spinner size="xl" />}>
		<ErrorBoundary
			FallbackComponent={() => (
				<h2>Something went wrong, please reload page</h2>
			)}
		>
			<ChakraProvider>
				<CustomApolloProvider>
					<IconContext.Provider
						value={{ color: theme.color.blue, size: "32px" }}
					>
						<Router>{children}</Router>
					</IconContext.Provider>
				</CustomApolloProvider>
			</ChakraProvider>
		</ErrorBoundary>
	</Suspense>
);
