import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Profile } = lazyImport(() => import("containers"), "Profile");
const { Browse } = lazyImport(() => import("containers"), "Browse");
const { Account } = lazyImport(() => import("containers"), "Account");

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
