export type Post = {
	id: string;
	body: string;
	createdAt: number;
	user: { email: string };
};
