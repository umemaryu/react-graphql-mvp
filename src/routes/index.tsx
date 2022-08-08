import { useNavigate, useRoutes } from "react-router-dom";
import React, { useEffect } from "react";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { authStore } from "stores";
import { useAuth } from "application";

export const AppRoutes = () => {
	const { loading } = useAuth();
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

	const routes = isAuth ? protectedRoutes : publicRoutes;
	const redirectRoutes = [{ path: "*", element: <Error404 /> }];

	const element = useRoutes([...routes, ...redirectRoutes]);

	return <>{element}</>;
};
