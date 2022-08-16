import { MutationUpdatePasswordArgs } from "infra/codegen";

export type ChangePassword = (
	args: MutationUpdatePasswordArgs
) => Promise<void>;
