import { useAuth } from "application";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { operations } = useAuth();
	const { updateTokenByLogin } = operations;
	return <LoginSection actions={{ updateTokenByLogin }} />;
};
