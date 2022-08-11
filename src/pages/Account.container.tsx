import { useAuth, useUser } from "applications";
import { AccountSection } from "components/Sections";

export const Account = () => {
	const { models: authModels, operations: authOperations } = useAuth();
	const { models: userModels, operations: userOperations } = useUser();
	const { updateTokenToNull } = authOperations;
	const { updatePassword } = userOperations;
	return (
		<AccountSection
			actions={{ updateTokenToNull, updatePassword }}
			id={authModels.id}
			error={userModels.error}
		/>
	);
};
