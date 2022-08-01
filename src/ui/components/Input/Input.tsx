import { Input as ChakraInput, Text } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface Props {
	value: string;
	text: string;
	placeholder?: string;
	mb?: number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ mb, text, ...props }) => (
	<>
		<Text mb={1}>{text}</Text>
		<ChakraInput size="lg" {...props} />
	</>
);

export default Input;
