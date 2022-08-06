import React from "react";
import { lazyImport } from "utils/lazyImport";

const Profile = React.lazy(() => import("ui/pages/Profile"));
const Browse = React.lazy(() => import("ui/pages/Browse"));
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
		element: <Browse />,
	},
	{
		path: "/account",
		element: <AccountSection />,
	},
];
