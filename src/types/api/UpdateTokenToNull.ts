import {
	MutationUpdateTokenToNullArgs,
	UpdateTokenToNullMutation,
} from "infra/codegen";

export type UpdateTokenToNull = (
	args: MutationUpdateTokenToNullArgs
) => Promise<UpdateTokenToNullMutation | null | undefined>;
