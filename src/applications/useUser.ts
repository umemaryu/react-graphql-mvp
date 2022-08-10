import {
	MutationUpdatePasswordArgs,
	useUpdatePasswordMutation,
} from "infra/codegen";
import { UpdatePassword } from "types";

export const useUser = () => {
	const [UPDATE_PASSWORD] = useUpdatePasswordMutation();
	const updatePassword: UpdatePassword = async (
		args: MutationUpdatePasswordArgs
	) => {
		await UPDATE_PASSWORD({
			variables: args,
		});
	};
	return { operations: { updatePassword } };
};
