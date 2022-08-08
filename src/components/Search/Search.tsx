import React, { useState } from "react";
import { Input, Box, HStack, SearchIcon } from "components/Elements";
import { ICreatePost, IFetchUserByEmail } from "types";

type SearchInput = Props;

const useSearch = ({ actions }: SearchInput) => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = () => {
		if (!value) return;
		actions.fetchUserByEmail({ email: value });
	};
	return { models: { value }, operations: { onChange, onClick } };
};

type Props = {
	actions: {
		fetchUserByEmail: IFetchUserByEmail;
		createPost: ICreatePost;
	};
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
				<SearchIcon value={models.value} />
			</Box>
		</HStack>
	);
};
