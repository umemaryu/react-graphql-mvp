// This is to fix codegen error
export type UserModel = {
	id: number;
	token: string;
	email: string;
	password: string;
	country: string;
	city: string;
	nickName: string;
	posts?: UserPost[];
};

export type UserPost = {
	id: number;
	authorId: number;
	body: string;
	createdAt: number;
};

export type Context = {
	token: string;
};
