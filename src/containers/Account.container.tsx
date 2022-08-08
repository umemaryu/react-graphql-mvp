import { useAuth } from "application";
import { AccountSection } from "components/Sections";

export const Account = () => {
	const { operations } = useAuth();
	const { updateTokenToNull } = operations;
	return <AccountSection actions={{ updateTokenToNull }} />;
};
