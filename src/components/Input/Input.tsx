import { Input as ChakraInput } from "@chakra-ui/react";
import React from "react";

interface Props {
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
}

export const Input: React.FC<Props> = ({ ...props }) => (
	<ChakraInput size="lg" {...props} />
);
