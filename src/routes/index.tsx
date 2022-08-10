import { useRoutes } from "react-router-dom";
import React from "react";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { useAuth } from "applications";
import { Error404 } from "pages/Error404";
import { useFetchUserByTokenQuery } from "infra/codegen";

export const AppRoutes = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	const { models } = useAuth(data);

	const routes = models.id ? protectedRoutes : publicRoutes;
	const redirectRoutes = [
		{ path: "*", element: <Error404 loading={loading} id={models.id} /> },
	];

	const element = useRoutes([...routes, ...redirectRoutes]);

	return <>{element}</>;
};
