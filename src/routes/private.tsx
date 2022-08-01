import React from "react";

const Profile = React.lazy(() => import("ui/pages/Profile"));
const Browse = React.lazy(() => import("ui/pages/Browse"));
const Account = React.lazy(() => import("ui/pages/Account"));

export const privateRoutes = [
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
