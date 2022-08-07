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

const useSearch = ({ actions }: Props) => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = () => {
		actions.fetchUserByEmail({ email: value });
	};
	return { models: { value }, operations: { onChange, onClick } };
};

export const Search: React.FC<Props> = ({ actions }) => {
	const { models, operations } = useSearch({ actions });
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
