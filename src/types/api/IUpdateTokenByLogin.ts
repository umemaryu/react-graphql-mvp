import {
	MutationUpdateTokenByLoginArgs,
	UpdateTokenByLoginMutation,
} from "infra/codegen";

export type IUpdateTokenByLogin = (
	args: MutationUpdateTokenByLoginArgs
) => Promise<UpdateTokenByLoginMutation | null | undefined>;
