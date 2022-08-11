import { useAuth } from "applications";
import { SignUpSection } from "components/Sections";

export const SignUp = () => {
	const { models, operations } = useAuth();
	const { createUser } = operations;
	return <SignUpSection actions={{ createUser }} error={models.error} />;
};
