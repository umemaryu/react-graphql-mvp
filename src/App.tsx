import { AppProvider } from "providers/AppProvider";
import { AppRoutes } from "routes";

export const App = () => (
	<AppProvider>
		<AppRoutes />
	</AppProvider>
);
