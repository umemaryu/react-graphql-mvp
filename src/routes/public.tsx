import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("components/Login"), "Login");
const { SignUp } = lazyImport(() => import("components/SignUp"), "SignUp");

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
