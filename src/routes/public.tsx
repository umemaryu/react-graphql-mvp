import React from "react";

const Login = React.lazy(() => import("ui/pages/Login"));
const SignUp = React.lazy(() => import("ui/pages/SignUp"));

export const publicRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
];
