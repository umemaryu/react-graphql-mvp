import { makeVar, ReactiveVar } from "@apollo/client";

export const authStore: ReactiveVar<number | undefined> = makeVar(
	undefined as number | undefined
);
