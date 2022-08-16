import { useAuth } from "interactions";
import { SignUpSection } from "components/Sections";

export const SignUp = () => {
	const { error, operations } = useAuth();
	const { signUp } = operations;
	return <SignUpSection actions={{ signUp }} error={error} />;
};
