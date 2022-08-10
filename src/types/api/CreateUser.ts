import { MutationCreateUserArgs } from "infra/codegen";

export type CreateUser = (args: MutationCreateUserArgs) => Promise<void>;
