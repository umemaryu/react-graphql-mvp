import { PrismaClient } from "@prisma/client";
import { ApolloServer, UserInputError, ValidationError } from "apollo-server";
import { readFileSync } from "fs";
import { Context } from "../server/models";
import {
	MutationCreatePostArgs,
	MutationCreateUserArgs,
	MutationUpdatePasswordArgs,
	MutationUpdateTokenByLoginArgs,
	MutationUpdateTokenToNullArgs,
	QueryFetchUserByEmailArgs,
	Resolvers,
} from "../server/codegen";

const emailValidation = (value: string) => {
	const reg = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
	const isValid = reg.test(value);
	if (!isValid) throw new UserInputError("Invalid Email");
};

const createToken = () => {
	const c = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ012345679";
	const cl = c.length;
	let r = "";
	for (let i = 0; i < 32; i++) {
		r += c[Math.floor(Math.random() * cl)];
	}
	return r;
};

const syncedTypeDefs = readFileSync("src/infra/schema.gql", "utf8");
const typeDefs = `${syncedTypeDefs}`;
const prisma = new PrismaClient();
const resolvers: Resolvers = {
	Query: {
		fetchUserByToken: async (
			_parent: unknown,
			_args: unknown,
			context: Context
		) => {
			const user = await prisma.user.findFirst({
				where: { token: context.token },
				include: { posts: { orderBy: { createdAt: "desc" } } },
			});
			if (!user || !context.token) throw new ValidationError("Invalid token");
			return user;
		},
		fetchUserByEmail: async (
			_parent: unknown,
			args: QueryFetchUserByEmailArgs
		) => {
			emailValidation(args.email);
			const user = await prisma.user.findFirst({
				where: { email: args.email },
				include: { posts: { orderBy: { createdAt: "desc" } } },
			});
			if (!user)
				throw new ValidationError("There is no corresponding e-mail address");
			return user;
		},
	},
	Mutation: {
		createUser: async (_parent: unknown, args: MutationCreateUserArgs) => {
			for (let key in args)
				if (args[key as keyof typeof args] === "")
					throw new UserInputError(
						`${args[key as keyof typeof args]} should be filled`
					);
			if (args.password.length < 6)
				throw new UserInputError("The password must be over 6 letters");
			emailValidation(args.email);
			const token = createToken();
			await prisma.user.create({
				data: {
					token: token,
					...args,
					posts: {},
				},
			});
			return token;
		},
		updateTokenByLogin: async (
			_parent: unknown,
			args: MutationUpdateTokenByLoginArgs
		) => {
			emailValidation(args.email);
			const user = await prisma.user.findFirst({
				where: { email: args.email, password: args.password },
			});
			if (!user) throw new Error("Email or password is wrong");
			const token = createToken();
			await prisma.user.update({
				where: { email: args.email },
				data: { token },
			});
			return token;
		},
		updatePassword: async (
			_parent: unknown,
			args: MutationUpdatePasswordArgs
		) => {
			if (args.oldPassword.length < 6 || args.newPassword.length < 6)
				throw new UserInputError("The password must be over 6 letters");
			const user = await prisma.user.findUniqueOrThrow({
				where: { id: args.id },
			});
			if (user.password !== args.oldPassword)
				throw new UserInputError("old password is wrong");
			await prisma.user.update({
				where: { id: args.id },
				data: { password: args.newPassword },
			});
			return true;
		},
		updateTokenToNull: async (
			_parent: unknown,
			args: MutationUpdateTokenToNullArgs
		) => {
			await prisma.user.update({
				where: {
					id: args.id,
				},
				data: {
					token: null,
				},
			});
			return true;
		},
		createPost: async (_parent: unknown, args: MutationCreatePostArgs) => {
			return await prisma.post.create({
				data: {
					createdAt: Math.floor(Date.now() / 1000),
					userId: args.receiverId,
					body: args.body,
					senderId: args.senderId,
					senderEmail: args.senderEmail,
				},
			});
		},
	},
};

const server = new ApolloServer({
	resolvers,
	typeDefs,
	context: ({ req }) => {
		const token = req.headers.authorization
			? req.headers.authorization.substr(7)
			: "";
		return { token };
	},
});
server
	.listen(4000, () => {})
	.then(({ url }) => {
		console.log(url);
	});
