import { useState } from "react";
import { Input, Box, HStack, SearchIcon } from "components/Elements";
import { PostOnThread, SearchUser } from "types";

type SearchInput = Props;

const useSearch = ({ actions }: SearchInput) => {
	const [value, setValue] = useState<string>("");
	const handleInput = (value: string) => {
		setValue(value);
	};
	const handleClick = async () => {
		if (!value) return;
		await actions.searchUser({ email: value });
		setValue("");
	};
	return { models: { value }, operations: { handleInput, handleClick } };
};

type Props = {
	actions: {
		searchUser: SearchUser;
		postOnThread: PostOnThread;
	};
};

export const Search: React.FC<Props> = ({ actions }) => {
	const { models, operations } = useSearch({ actions });
	return (
		<HStack>
			<Input
				placeholder="mail@example.com"
				value={models.value}
				onChange={(e) => operations.handleInput(e.target.value)}
			/>
			<Box onClick={() => operations.handleClick()}>
				<SearchIcon value={models.value} />
			</Box>
		</HStack>
	);
};
