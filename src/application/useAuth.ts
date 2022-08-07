import { MutationCreateUserArgs, useCreateUserMutation } from "gql/codegen";
import storage from "utils/storage";

export const useAuth = () => {
	const [CREATE_USER] = useCreateUserMutation();
	const createUser = async (args: MutationCreateUserArgs) => {
		try {
			return await CREATE_USER({
				variables: args,
			}).then((res) => {
				if (res.data && res.data.createUser.token)
					storage.setToken(res.data.createUser.token);
				return res.data;
			});
		} catch (e) {
			console.log(e);
		}
	};
	return { operations: { createUser } };
};
