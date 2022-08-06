import { Input as ChakraInput } from "@chakra-ui/react";
import React from "react";

interface Props {
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	onChange?: (value: string) => void;
}

export const Input: React.FC<Props> = ({ ...props }) => (
	<ChakraInput
		{...props}
		size="lg"
		onChange={(e) => props.onChange && props.onChange(e.target.value)}
	/>
);
