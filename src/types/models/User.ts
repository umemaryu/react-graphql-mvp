import { Post } from "types";

export type User = {
	id: string;
	email: string;
	country: string;
	city: string;
	nickName: string;
	posts?: Post[] | null | undefined;
};
