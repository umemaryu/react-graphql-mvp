import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "ui/components/Spinner/Spinner";

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<React.Suspense
		fallback={
			<div className="flex items-center justify-center w-screen h-screen">
				<Spinner size="xl" />
			</div>
		}
	>
		<ErrorBoundary
			FallbackComponent={() => (
				<h2>Something went wrong, please reload page</h2>
			)}
		>
			<ChakraProvider>
				<Router>{children}</Router>
			</ChakraProvider>
		</ErrorBoundary>
	</React.Suspense>
);
