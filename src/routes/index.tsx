import { useRoutes } from "react-router-dom";
import React from "react";

import { publicRoutes } from "routes/public";
import Home from "ui/pages/Home";

export const AppRoutes = () => {
	const commonRoutes = [{ path: "/", element: <Home /> }];

	const element = useRoutes([...publicRoutes, ...commonRoutes]);

	return <>{element}</>;
};
