import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Profile } = lazyImport(() => import("containers"), "Profile");

const { BrowseSection } = lazyImport(
	() => import("components/Sections"),
	"BrowseSection"
);
const { AccountSection } = lazyImport(
	() => import("components/Sections"),
	"AccountSection"
);

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
		element: <AccountSection />,
	},
];
