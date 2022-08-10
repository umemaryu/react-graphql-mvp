import {
	MutationUpdateTokenByLoginArgs,
	UpdateTokenByLoginMutation,
} from "infra/codegen";

export type UpdateTokenByLogin = (
	args: MutationUpdateTokenByLoginArgs
) => Promise<UpdateTokenByLoginMutation | null | undefined>;
