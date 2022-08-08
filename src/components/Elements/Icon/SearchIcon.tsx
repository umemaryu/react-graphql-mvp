import { BiSearchAlt } from "react-icons/bi";
import { theme } from "utils/theme";

type Props = {
	value: string;
};

export const SearchIcon = ({ value }: Props) => (
	<BiSearchAlt
		cursor={value ? "pointer" : "not-allowed"}
		color={value ? theme.color.blue : theme.color.gray}
	/>
);
