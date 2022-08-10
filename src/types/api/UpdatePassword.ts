import {
	MutationUpdatePasswordArgs,
	UpdatePasswordMutation,
} from "infra/codegen";

export type UpdatePassword = (
	args: MutationUpdatePasswordArgs
) => Promise<UpdatePasswordMutation | null | undefined>;
