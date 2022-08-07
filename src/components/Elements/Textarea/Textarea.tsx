import { Textarea as ChakraTextarea, TextareaProps } from "@chakra-ui/react";

export const Textarea = ({ ...props }: TextareaProps) => (
	<ChakraTextarea {...props} />
);
