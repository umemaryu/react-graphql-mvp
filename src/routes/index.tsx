import { useRoutes } from "react-router-dom";
import React from "react";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { useAuth } from "application";
import { Error404 } from "pages/Error404";

export const AppRoutes = () => {
	const { loading, id } = useAuth();

	const routes = id ? protectedRoutes : publicRoutes;
	const redirectRoutes = [
		{ path: "*", element: <Error404 loading={loading} id={id} /> },
	];

	const element = useRoutes([...routes, ...redirectRoutes]);

	return <>{element}</>;
};
