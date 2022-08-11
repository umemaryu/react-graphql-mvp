import { lazyImport } from "utils/lazyImport";

const { Profile } = lazyImport(() => import("pages"), "Profile");
const { Browse } = lazyImport(() => import("pages"), "Browse");
const { Account } = lazyImport(() => import("pages"), "Account");

export const protectedRoutes = [
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
	{
		path: "/account",
		element: <Account />,
	},
];
