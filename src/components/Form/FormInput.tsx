import { Input as ChakraInput } from "@chakra-ui/react";
import React from "react";

interface Props {
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	id: string;
	onChange: (value: string, kind: string) => void;
}

export const FormInput: React.FC<Props> = ({ id, onChange, ...props }) => (
	<ChakraInput
		{...props}
		size="lg"
		onChange={(e) => onChange(e.target.value, id)}
	/>
);
