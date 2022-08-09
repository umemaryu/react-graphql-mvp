import React, { useState } from "react";
import { Input, Box, HStack, SearchIcon } from "components/Elements";
import { ICreatePost, IFetchUserByEmail } from "types";

type SearchInput = Props;

const useSearch = ({ actions }: SearchInput) => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = async () => {
		if (!value) return;
		const res = await actions.fetchUserByEmail({ variables: { email: value } });
		if (res.data) setValue("");
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
				value={models.value}
				onChange={(e) => operations.onChange(e.target.value)}
			/>
			<Box onClick={() => operations.onClick()}>
				<SearchIcon value={models.value} />
			</Box>
		</HStack>
	);
};
