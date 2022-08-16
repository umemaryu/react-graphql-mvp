import { useAuth } from "interactions";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { models, operations } = useAuth();
	const { login } = operations;
	return <LoginSection actions={{ login }} error={models.error} />;
};
