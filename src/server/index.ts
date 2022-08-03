import { Prisma, PrismaClient } from "@prisma/client";
import { ApolloError, ApolloServer, ValidationError } from "apollo-server";
import { readFileSync } from "fs";
import { Context } from "gql/models";
import { MutationCreateUserArgs } from "server/codegen";

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
			try {
				const user = await prisma.user.findFirst({
					where: { token: context.token },
				});
				if (!user || context.token === "")
					throw new ValidationError("Invalid token");
				return user;
			} catch (e) {
				if (e instanceof Error || e instanceof ApolloError)
					throw new Error(e.message);
				else throw new Error("unknown Error");
			}
		},
	},
	Mutation: {
		createUser: async (_parent: unknown, args: MutationCreateUserArgs) => {
			try {
				if (args.password.length < 6)
					throw new Error("The password must be over 6 characters");
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
			} catch (e) {
				if (e instanceof Prisma.PrismaClientKnownRequestError)
					throw new Error("The email is already used");
				else if (e instanceof Error) throw new Error(e.message);
				throw new Error("unknown Error");
			}
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
