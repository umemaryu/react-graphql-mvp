import React from "react";
import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("containers"), "Login");
const { SignUpSection } = lazyImport(
	() => import("components/Sections"),
	"SignUpSection"
);

export const publicRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUpSection />,
	},
];
