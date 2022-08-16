import {
	MutationUpdateTokenByLoginArgs,
	useUpdateTokenByLoginMutation,
} from "infra/codegen";
import storage from "utils/storage";

export const useAuthOperations = () => {
	const [UPDATE_TOKEN_BY_LOGIN] = useUpdateTokenByLoginMutation();
	const updateTokenByLogin: (
		args: MutationUpdateTokenByLoginArgs
	) => Promise<void> = async (args) => {
		await UPDATE_TOKEN_BY_LOGIN({
			variables: args,
		}).then((res) => {
			if (res.data && res.data.updateTokenByLogin) {
				storage.setToken(res.data.updateTokenByLogin);
			}
		});
	};
	return { mutations: { updateTokenByLogin } };
};

export default useAuthOperations;
