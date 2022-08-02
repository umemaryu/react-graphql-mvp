import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("features/auth"), "Login");
const { SignUp } = lazyImport(() => import("features/auth"), "SignUp");

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
