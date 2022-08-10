import { CreateUserMutation, MutationCreateUserArgs } from "infra/codegen";

export type CreateUser = (
	args: MutationCreateUserArgs
) => Promise<CreateUserMutation | null | undefined>;
