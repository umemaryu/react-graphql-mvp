import { useRoutes } from "react-router-dom";
import { publicRoutes } from "routes/public";
import { protectedRoutes } from "routes/protected";
import { useAuth } from "interactions";
import { Error404 } from "pages";
import { authStore } from "infra/stores/authStore";

export const AppRoutes = () => {
	const { loading } = useAuth();
	const id = authStore();
	const routes = id ? protectedRoutes(id) : publicRoutes;
	const redirectRoutes = [
		{ path: "*", element: <Error404 loading={loading} id={id} /> },
	];

	const element = useRoutes([...routes, ...redirectRoutes]);
	return <>{element}</>;
};
