import { MutationUpdatePasswordArgs } from "infra/codegen";

export type UpdatePassword = (
	args: MutationUpdatePasswordArgs
) => Promise<void>;
