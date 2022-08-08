import { CreateUserMutation, MutationCreateUserArgs } from "gql/codegen";

export type ICreateUser = (
	args: MutationCreateUserArgs
) => Promise<CreateUserMutation | null | undefined>;
