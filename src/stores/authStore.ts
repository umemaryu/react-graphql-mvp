import { makeVar, ReactiveVar } from "@apollo/client";

export const authStore: ReactiveVar<string | undefined> = makeVar(
	undefined as string | undefined
);
