import { useRoutes } from "react-router-dom";
import React from "react";

import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { HomeSection } from "components/Sections";

export const AppRoutes = () => {
	const commonRoutes = [{ path: "/", element: <HomeSection /> }];

	const element = useRoutes([
		...publicRoutes,
		...commonRoutes,
		...protectedRoutes,
	]);

	return <>{element}</>;
};
