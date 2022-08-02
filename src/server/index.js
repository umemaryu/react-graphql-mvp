import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";

const prisma = new PrismaClient();

const typeDefs = `
type User {
	id: ID!
	token: String!
	email: String!
	password: String!
	country: String!
	city: String!
	nickName: String!
	posts: [Post!]
}

type Post {
	id: ID!
	authorId: Int!
	body: String!
	createdAt: Int!
	user: User!
	userId: Int!
}
type Query{
	allUsers:[User]
}
`;

const resolvers = {
	Query: {
		allUsers: () => {
			return prisma.user.findMany();
		},
	},
	// Mutation: {
	// 	createUser: async (_parent: unknown, args: MutationCreateUserArgs) => {
	// 		try {
	// 			if (args.password.length < 4)
	// 				throw new Error("This password must be over 4 characters");
	// 			const token = require("crypto").randomBytes(32).toString("hex");
	// 			return await prisma.user.create({
	// 				data: {
	// 					email: args.email,
	// 					password: args.password,
	// 					token: token,
	// 					lang: args.lang,
	// 					notification: {
	// 						create: {
	// 							isNewGallery: true,
	// 							isAboutUs: true,
	// 							isNewWork: true,
	// 						},
	// 					},
	// 				},
	// 			});
	// 		} catch (e) {
	// 			if (e instanceof Prisma.PrismaClientKnownRequestError)
	// 				throw new Error("This email is already used");
	// 		}
	// 	},
	// },
};

const server = new ApolloServer({ resolvers, typeDefs });
server
	.listen(4000, () => {})
	.then(({ url }) => {
		console.log(url);
	});
