import { Prisma, PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { MutationCreateUserArgs } from "server/codegen";

const syncedTypeDefs = readFileSync("src/gql/schema.gql", "utf8");
const typeDefs = `${syncedTypeDefs}`;
const prisma = new PrismaClient();
const resolvers = {
	Query: {},
	Mutation: {
		createUser: async (_parent: unknown, args: MutationCreateUserArgs) => {
			try {
				if (args.password.length < 6)
					throw new Error("The password must be over 6 characters");
				const token = "aaaaa";
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

const server = new ApolloServer({ resolvers, typeDefs });
server
	.listen(4000, () => {})
	.then(({ url }) => {
		console.log(url);
	});
