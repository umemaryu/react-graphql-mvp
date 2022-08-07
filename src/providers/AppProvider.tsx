import { ChakraProvider, useToast } from "@chakra-ui/react";
import { useMemo, Suspense, useState, useEffect } from "react";
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
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import storage from "utils/storage";
import { onError } from "@apollo/client/link/error";
import { cache } from "stores";

type AppProviderProps = {
	children: React.ReactNode;
};

type Props = {
	children: React.ReactNode;
};

type Toast = {
	title: string;
	description: string;
	status: "success" | "error" | "warning" | "info";
};

const CustomApolloProvider: React.FC<Props> = ({ children }) => {
	const devURL = "http://localhost:4000/";
	const httpLink = useMemo(() => {
		return createHttpLink({
			uri: devURL,
			credentials: "same-origin",
		});
	}, []);
	const [state, setState] = useState<Toast>({
		title: "",
		description: "",
		status: "error",
	});
	const toast = useToast();
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
	const errorLink = useMemo(() => {
		return onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors) {
				graphQLErrors.map(({ message, locations, path }) => {
					setState({
						title: `${message}`,
						description: "Will you please try one more time?",
						status: "error",
					});
					return console.log(
						`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
					);
				});
			}
			if (networkError) {
				setState({
					title: `${networkError.message}`,
					description: "Will you please try one more time?",
					status: "error",
				});
				console.log(`[Network error]: ${networkError}`);
			}
		});
	}, []);
	useEffect(() => {
		if (state.description || state.title)
			toast({
				title: state.title,
				description: state.description,
				status: state.status,
				duration: 6000,
				isClosable: true,
			});
	}, [toast, state]);

	const client = useMemo(() => {
		return new ApolloClient({
			link: ApolloLink.from([errorLink, authLink, httpLink]),
			cache: cache,
			connectToDevTools: true,
			defaultOptions: {
				watchQuery: {
					fetchPolicy: "cache-and-network",
				},
			},
		});
	}, [httpLink, authLink, errorLink]);
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
