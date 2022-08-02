import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";

const prisma = new PrismaClient();
const syncedTypeDefs = readFileSync("src/graphql/schema.gql", "utf8");
const typeDefs = `${syncedTypeDefs}`;

const resolvers = {
	Query: {},
};

const server = new ApolloServer({ resolvers, typeDefs });
server
	.listen(4000, () => {})
	.then(({ url }) => {
		console.log(url);
	});
