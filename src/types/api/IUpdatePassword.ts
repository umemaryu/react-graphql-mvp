import {
	MutationUpdatePasswordArgs,
	UpdatePasswordMutation,
} from "gql/codegen";

export type IUpdatePassword = (
	args: MutationUpdatePasswordArgs
) => Promise<UpdatePasswordMutation | null | undefined>;
