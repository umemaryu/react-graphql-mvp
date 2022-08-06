import React from "react";
import { lazyImport } from "utils/lazyImport";

const { ProfileSection } = lazyImport(
	() => import("components/Sections"),
	"ProfileSection"
);

const Browse = React.lazy(() => import("ui/pages/Browse"));
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
		element: <Browse />,
	},
	{
		path: "/account",
		element: <AccountSection />,
	},
];
