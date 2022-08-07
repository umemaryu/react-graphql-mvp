import React from "react";
import { Input, Box, HStack, SearchIcon } from "components/Elements";
import {
	CreatePostMutation,
	FetchUserByEmailQuery,
	MutationCreatePostArgs,
	QueryFetchUserByEmailArgs,
} from "gql/codegen";

type Props = {
	actions: {
		fetchUserByEmail: (
			args: QueryFetchUserByEmailArgs
		) => Promise<FetchUserByEmailQuery | undefined>;
		createPost: (
			args: MutationCreatePostArgs
		) => Promise<CreatePostMutation | null | undefined>;
	};
};

export const Search: React.FC<Props> = ({ actions }) => {
	return (
		<HStack>
			<Input placeholder="mail@example.com" />
			<Box
				onClick={() => {
					console.log("onClick");
				}}
			>
				<SearchIcon />
			</Box>
		</HStack>
	);
};
