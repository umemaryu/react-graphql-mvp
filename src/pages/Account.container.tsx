import { useAuth, useUser } from "interactions";
import { AccountSection } from "components/Sections";
import { authStore } from "infra/stores/authStore";

export const Account = () => {
	const id = authStore();
	const { operations: authOperations } = useAuth();
	const { models: userModels, operations: userOperations } = useUser();
	const { updateTokenToNull } = authOperations;
	const { updatePassword } = userOperations;
	return (
		<AccountSection
			actions={{ updateTokenToNull, updatePassword }}
			id={id}
			error={userModels.error}
		/>
	);
};
