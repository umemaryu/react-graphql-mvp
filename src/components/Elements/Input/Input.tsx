import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import React from "react";

export const Input = ({ ...props }: InputProps) => (
	<ChakraInput {...props} size="lg" />
);
