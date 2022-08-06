import {
	FormHelperText as ChakraFormHelperText,
	HelpTextProps,
} from "@chakra-ui/react";

export const FormHelperText = ({ ...props }: HelpTextProps) => (
	<ChakraFormHelperText {...props} />
);
