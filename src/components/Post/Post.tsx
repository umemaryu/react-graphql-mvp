import { useState } from "react";
import { Box, HStack, PostIcon } from "components/Elements";
import { theme } from "utils/theme";
import { Textarea } from "components/Elements/Textarea";
import { CreatePost, User } from "types";

type Input = Props;

const usePost = ({ actions, sender, receiver, queryName }: Input) => {
	const [value, setValue] = useState<string>("");
	const handleChange = (value: string) => {
		setValue(value);
	};
	const handleClick = async () => {
		if (!value) return;
		const args = {
			body: value,
			receiverId: parseInt(receiver.id),
			senderId: parseInt(sender.id),
			senderEmail: sender.email,
		};
		await actions.postOnThread(args, receiver, queryName);
		setValue("");
	};
	return { models: { value }, operations: { handleClick, handleChange } };
};

type Props = {
	receiver: User;
	sender: User;
	queryName: "fetchUserByToken" | "fetchUserByEmail";
	actions: {
		postOnThread: CreatePost;
	};
};

export const Post: React.FC<Props> = ({
	actions,
	sender,
	receiver,
	queryName,
}) => {
	const { models, operations } = usePost({
		actions,
		sender,
		receiver,
		queryName,
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
