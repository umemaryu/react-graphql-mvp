import { useAuth, useUser } from "application";
import { AccountSection } from "components/Sections";

export const Account = () => {
	const { operations: authOperations } = useAuth();
	const { operations: userOperations } = useUser();
	const { updateTokenToNull } = authOperations;
	const { updatePassword } = userOperations;
	return <AccountSection actions={{ updateTokenToNull, updatePassword }} />;
};
