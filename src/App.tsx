import { AppProvider } from "providers/AppProvider";
import { AppRoutes } from "routes";

const App = () => (
	<AppProvider>
		<AppRoutes />
	</AppProvider>
);

export default App;
