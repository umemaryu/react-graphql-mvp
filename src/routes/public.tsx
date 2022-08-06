import React from "react";
import { lazyImport } from "utils/lazyImport";

const { LoginSection } = lazyImport(
	() => import("components/Sections"),
	"LoginSection"
);
const { SignUpSection } = lazyImport(
	() => import("components/Sections"),
	"SignUpSection"
);

export const publicRoutes = [
	{
		path: "/login",
		element: <LoginSection />,
	},
	{
		path: "/sign-up",
		element: <SignUpSection />,
	},
];
