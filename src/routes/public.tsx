import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("pages"), "Login");
const { SignUp } = lazyImport(() => import("pages"), "SignUp");

export const publicRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
];
