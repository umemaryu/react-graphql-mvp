import { useToast } from "@chakra-ui/react";
import { useMemo, useState, useEffect } from "react";
import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import storage from "utils/storage";
import { onError } from "@apollo/client/link/error";
import { cache } from "stores";

type Toast = {
	title: string;
	description: string;
	status: "success" | "error" | "warning" | "info";
};

const useClient = () => {
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
				duration: 300,
				isClosable: true,
			});
	}, [toast, state]);

	const client = useMemo(() => {
		return new ApolloClient({
			link: ApolloLink.from([errorLink, authLink, httpLink]),
			cache: cache,
			connectToDevTools: true,
		});
	}, [httpLink, authLink, errorLink]);
	return { client };
};

export default useClient;
