import { useAuth } from "applications";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { operations } = useAuth();
	const { updateTokenByLogin } = operations;
	return <LoginSection actions={{ updateTokenByLogin }} />;
};
