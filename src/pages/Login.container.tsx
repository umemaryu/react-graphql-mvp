import { useAuth } from "interactions";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { models, operations } = useAuth();
	const { updateTokenByLogin } = operations;
	return <LoginSection actions={{ updateTokenByLogin }} error={models.error} />;
};
