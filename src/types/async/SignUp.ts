import { MutationCreateUserArgs } from "infra/codegen";

export type SignUp = (args: MutationCreateUserArgs) => Promise<void>;
