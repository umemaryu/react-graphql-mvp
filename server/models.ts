// This is to fix codegen error
export type UserModel = {
	id: number;
	token: string | null;
	email: string;
	password: string;
	country: string;
	city: string;
	nickName: string;
	posts?: UserPost[];
};

export type UserPost = {
	id: number;
	senderId: number;
	body: string;
	createdAt: number;
	date: string;
};

export type Context = {
	token: string | null;
};
