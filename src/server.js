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
};

const server = new ApolloServer({ resolvers, typeDefs });
server
	.listen(4000, () => {})
	.then(({ url }) => {
		console.log(url);
	});
