import {
	MutationUpdateTokenByLoginArgs,
	UpdateTokenByLoginMutation,
} from "gql/codegen";

export type IUpdateTokenByLogin = (
	args: MutationUpdateTokenByLoginArgs
) => Promise<UpdateTokenByLoginMutation | null | undefined>;
