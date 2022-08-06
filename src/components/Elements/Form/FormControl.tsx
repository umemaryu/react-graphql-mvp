import {
	FormControl as ChakraFormControl,
	FormControlProps,
} from "@chakra-ui/react";

export const FormControl = ({ ...props }: FormControlProps) => (
	<ChakraFormControl {...props} />
);
