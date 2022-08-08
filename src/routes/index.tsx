import { useNavigate, useRoutes } from "react-router-dom";
import React, { useEffect } from "react";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { Home } from "containers";
import { authStore } from "stores";
import { useFetchUserByTokenQuery } from "gql/codegen";

export const AppRoutes = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	if (!loading && data) {
		const id = parseInt(data.fetchUserByToken.id);
		authStore(id);
	}
	const isAuth = authStore();
	const Error404 = () => {
		const navigate = useNavigate();
		useEffect(() => {
			if (!loading) {
				if (isAuth) navigate("/profile");
				else navigate("/login");
			}
		}, [navigate]);
		return <></>;
	};

	const commonRoutes = [{ path: "/", element: <Home /> }];
	const routes = isAuth ? protectedRoutes : publicRoutes;
	const redirectRoutes = [{ path: "*", element: <Error404 /> }];

	const element = useRoutes([...routes, ...commonRoutes, ...redirectRoutes]);

	return <>{element}</>;
};
