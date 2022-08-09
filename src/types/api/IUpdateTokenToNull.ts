import {
	MutationUpdateTokenToNullArgs,
	UpdateTokenToNullMutation,
} from "infra/codegen";

export type IUpdateTokenToNull = (
	args: MutationUpdateTokenToNullArgs
) => Promise<UpdateTokenToNullMutation | null | undefined>;
