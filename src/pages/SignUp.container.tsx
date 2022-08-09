import { useAuth } from "application";
import { SignUpSection } from "components/Sections";

export const SignUp = () => {
	const { operations } = useAuth();
	const { createUser } = operations;
	return <SignUpSection actions={{ createUser }} />;
};
