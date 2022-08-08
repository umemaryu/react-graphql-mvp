import {
	MutationUpdateTokenToNullArgs,
	UpdateTokenToNullMutation,
} from "gql/codegen";

export type IUpdateTokenToNull = (
	args: MutationUpdateTokenToNullArgs
) => Promise<UpdateTokenToNullMutation | null | undefined>;
