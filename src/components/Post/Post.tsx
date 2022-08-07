import React, { useState } from "react";
import { Box, HStack, PostIcon } from "components/Elements";
import { theme } from "utils/theme";
import { Textarea } from "components/Elements/Textarea";
import { ProfileActions } from "containers";
import { FetchUserByTokenQuery } from "gql/codegen";

type Props =
	| ({
			user?: FetchUserByTokenQuery;
	  } & ProfileActions)
	| any;

const usePost = ({
	actions,
	user,
}: {
	user?: FetchUserByTokenQuery;
} & ProfileActions) => {
	const [value, setValue] = useState<string>("");
	const onChange = (value: string) => {
		setValue(value);
	};
	const onClick = () => {
		if (user) {
			actions.createPost({
				body: value,
				senderId: parseInt(user.fetchUserByToken.id),
				receiverId: parseInt(user.fetchUserByToken.id),
			});
			setValue("");
		}
	};
	return { models: { value }, operations: { onClick, onChange } };
};

export const Post: React.FC<Props> = ({ actions, user }) => {
	const { models, operations } = usePost({ actions, user });
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
				<PostIcon />
			</Box>
		</HStack>
	);
};
