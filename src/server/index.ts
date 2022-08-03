import { PrismaClient } from "@prisma/client";
import { ApolloServer, UserInputError, ValidationError } from "apollo-server";
import { readFileSync } from "fs";
import { Context } from "gql/models";
import { MutationCreateUserArgs } from "server/codegen";

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

const syncedTypeDefs = readFileSync("src/gql/schema.gql", "utf8");
const typeDefs = `${syncedTypeDefs}`;
const prisma = new PrismaClient();
const resolvers = {
	Query: {
		fetchUserByToken: async (
			_parent: unknown,
			_args: unknown,
			context: Context
		) => {
			const user = await prisma.user.findFirst({
				where: { token: context.token },
			});
			if (!user || context.token === "")
				throw new ValidationError("Invalid token");
			return user;
		},
	},
	Mutation: {
		createUser: async (_parent: unknown, args: MutationCreateUserArgs) => {
			if (args.password.length < 6)
				throw new UserInputError("The password must be over 6 characters");
			emailValidation(args.email);
			const token = createToken();
			const res = await prisma.user.create({
				data: {
					email: args.email,
					password: args.password,
					country: args.country,
					city: args.city,
					nickName: args.nickName,
					token: token,
				},
			});
			return res;
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
