import { useState } from "react";
import { Box, HStack, PostIcon } from "components/Elements";
import { theme } from "utils/theme";
import { Textarea } from "components/Elements/Textarea";
import { CreatePost } from "types";

type Input = Props;

const usePost = ({ actions, senderId, receiverId, senderEmail }: Input) => {
	const [value, setValue] = useState<string>("");
	const handleChange = (value: string) => {
		setValue(value);
	};
	const handleClick = async () => {
		if (!value) return;
		await actions.postOnThread({
			body: value,
			senderId: parseInt(senderId),
			receiverId: parseInt(receiverId),
			senderEmail: senderEmail,
		});
		setValue("");
	};
	return { models: { value }, operations: { handleClick, handleChange } };
};

type Props = {
	receiverId: string;
	senderId: string;
	senderEmail: string;
	actions: {
		postOnThread: CreatePost;
	};
};

export const Post: React.FC<Props> = ({
	actions,
	senderId,
	receiverId,
	senderEmail,
}) => {
	const { models, operations } = usePost({
		actions,
		senderId,
		receiverId,
		senderEmail,
	});
	return (
		<HStack
			border="1px"
			borderColor={theme.color.gray}
			w={theme.w.mobile}
			position="fixed"
			bottom="0vh"
			bg={theme.color.white}
		>
			<Textarea
				placeholder="Hi!"
				my={2}
				ml={2}
				value={models.value}
				onChange={(e) => operations.handleChange(e.target.value)}
			/>
			<Box onClick={() => operations.handleClick()}>
				<PostIcon value={models.value} />
			</Box>
		</HStack>
	);
};
