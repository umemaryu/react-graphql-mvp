import React from "react";
import { lazyImport } from "utils/lazyImport";

const { ProfileSection } = lazyImport(
	() => import("components/Sections"),
	"ProfileSection"
);

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
		element: <ProfileSection />,
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
