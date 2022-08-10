import { MutationCreatePostArgs } from "infra/codegen";

export type ICreatePost = (args: MutationCreatePostArgs) => Promise<void>;
