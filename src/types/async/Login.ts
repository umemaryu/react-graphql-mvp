import { MutationUpdateTokenByLoginArgs } from "infra/codegen";

export type Login = (
	args: MutationUpdateTokenByLoginArgs
) => Promise<void>;
