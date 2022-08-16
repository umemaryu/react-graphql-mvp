import { useAuth } from "interactions";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { error, operations } = useAuth();
	const { login } = operations;
	return <LoginSection actions={{ login }} error={error} />;
};
