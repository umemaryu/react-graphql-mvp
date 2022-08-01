import React from "react";

const Login = React.lazy(() => import("ui/pages/Login"));

export const publicRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
];
