import {
	MutationUpdatePasswordArgs,
	UpdatePasswordMutation,
} from "infra/codegen";

export type IUpdatePassword = (
	args: MutationUpdatePasswordArgs
) => Promise<UpdatePasswordMutation | null | undefined>;
