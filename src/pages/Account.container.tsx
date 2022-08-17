import { useAuth, useUser } from "interactions";
import { AccountSection } from "components/Sections";

type Props = {
	id: number;
};

export const Account = ({ id }: Props) => {
	const { operations: authOperations } = useAuth();
	const { error, operations: userOperations } = useUser();
	const { signOut } = authOperations;
	const { changePassword } = userOperations;
	return (
		<AccountSection
			actions={{ signOut, changePassword }}
			id={id}
			error={error}
		/>
	);
};
