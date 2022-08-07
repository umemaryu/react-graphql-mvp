import React, { useState } from "react";
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

const useSearch = () => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = () => {};
	return { models: { value }, operations: { onChange, onClick } };
};

export const Search: React.FC<Props> = ({ actions }) => {
	const { models, operations } = useSearch();
	return (
		<HStack>
			<Input
				placeholder="mail@example.com"
				onChange={(e) => operations.onChange(e.target.value)}
				value={models.value}
			/>
			<Box onClick={() => operations.onClick()}>
				<SearchIcon />
			</Box>
		</HStack>
	);
};
