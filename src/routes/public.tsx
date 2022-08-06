import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("containers"), "Login");
const { SignUp } = lazyImport(() => import("containers"), "SignUp");

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
