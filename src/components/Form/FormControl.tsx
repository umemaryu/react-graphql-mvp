import { FormControl as ChakraFormControl } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const FormControl: React.FC<Props> = ({ children, ...props }) => (
	<ChakraFormControl {...props}>{children}</ChakraFormControl>
);
