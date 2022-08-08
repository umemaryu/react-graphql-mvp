import { useAuth } from "application";
import { LoginSection } from "components/Sections";

export const Login = () => {
	const { operations } = useAuth();
	const { fetchUserByEmailAndPassword } = operations;
	return <LoginSection actions={{ fetchUserByEmailAndPassword }} />;
};
