import { CreateUserMutation, MutationCreateUserArgs } from "infra/codegen";

export type ICreateUser = (
	args: MutationCreateUserArgs
) => Promise<CreateUserMutation | null | undefined>;
