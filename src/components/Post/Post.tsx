import React, { useState } from "react";
import { Box, HStack, PostIcon } from "components/Elements";
import { theme } from "utils/theme";
import { Textarea } from "components/Elements/Textarea";
import { ICreatePost } from "types";

type Props =
	| {
			receiverId?: string;
			senderId?: string;
	  } & {
			actions: {
				createPost: ICreatePost;
			};
	  };

const usePost = ({ actions, senderId, receiverId }: Props) => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = () => {
		if (!value) return;
		if (senderId && receiverId) {
			actions.createPost({
				body: value,
				senderId: parseInt(senderId),
				receiverId: parseInt(receiverId),
			});
			setValue("");
		}
	};
	return { models: { value }, operations: { onClick, onChange } };
};

export const Post: React.FC<Props> = ({ actions, senderId, receiverId }) => {
	const { models, operations } = usePost({ actions, senderId, receiverId });
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
				onChange={(e) => operations.onChange(e.target.value)}
				value={models.value}
			/>
			<Box onClick={() => operations.onClick()}>
				<PostIcon value={models.value} />
			</Box>
		</HStack>
	);
};
