import { BiSend } from "react-icons/bi";
import { theme } from "utils/theme";

type Props = {
	value: string;
};

export const PostIcon = ({ value }: Props) => (
	<BiSend
		cursor={value ? "pointer" : "not-allowed"}
		color={value ? theme.color.blue : theme.color.gray}
	/>
);
