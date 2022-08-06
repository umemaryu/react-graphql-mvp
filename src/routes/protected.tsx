import React from "react";
import { lazyImport } from "utils/lazyImport";

const Profile = React.lazy(() => import("ui/pages/Profile"));
const Browse = React.lazy(() => import("ui/pages/Browse"));
const { Account } = lazyImport(() => import("components/Account"), "Account");

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
