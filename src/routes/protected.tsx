import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Profile } = lazyImport(() => import("containers"), "Profile");

const { BrowseSection } = lazyImport(
	() => import("components/Sections"),
	"BrowseSection"
);
const { Account } = lazyImport(() => import("containers"), "Account");

export const protectedRoutes = [
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/browse",
		element: <BrowseSection />,
	},
	{
		path: "/account",
		element: <Account />,
	},
];
