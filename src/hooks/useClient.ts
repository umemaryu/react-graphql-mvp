import { useMemo } from "react";
import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import storage from "utils/storage";
import { onError } from "@apollo/client/link/error";
import { cache } from "stores";
import useCustomToast from "hooks/useCustomToast";

const useClient = () => {
	const devURL = "http://localhost:4000/";
	const httpLink = useMemo(() => {
		return createHttpLink({
			uri: devURL,
			credentials: "same-origin",
		});
	}, []);
	const { setError } = useCustomToast();
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
					if (path && path[0] !== "fetchUserByToken") {
						setError({
							title: `${message}`,
							description: "Will you please try one more time?",
						});
					}
					return console.log(
						`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
					);
				});
			}
			if (networkError) {
				setError({
					title: `${networkError.message}`,
					description: "Will you please try one more time?",
				});
				console.log(`[Network error]: ${networkError}`);
			}
		});
	}, [setError]);

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
