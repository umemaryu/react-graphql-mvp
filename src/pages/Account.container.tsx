import { useAuth, useUser } from "applications";
import { AccountSection } from "components/Sections";

export const Account = () => {
	const { models, operations: authOperations } = useAuth();
	const { operations: userOperations } = useUser();
	const { updateTokenToNull } = authOperations;
	const { updatePassword } = userOperations;
	return (
		<AccountSection
			actions={{ updateTokenToNull, updatePassword }}
			id={models.id}
		/>
	);
};
