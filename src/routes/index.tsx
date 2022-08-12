import { useRoutes } from "react-router-dom";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { useAuth } from "interactions";
import { Error404 } from "pages/Error404";
import { useFetchUserByTokenQuery } from "infra/codegen";
import { authStore } from "infra/stores/authStore";

export const AppRoutes = () => {
	const { data, loading } = useFetchUserByTokenQuery();
	useAuth(data);
	const id = authStore();

	const routes = id ? protectedRoutes : publicRoutes;
	const redirectRoutes = [
		{ path: "*", element: <Error404 loading={loading} id={id} /> },
	];

	const element = useRoutes([...routes, ...redirectRoutes]);

	return <>{element}</>;
};
