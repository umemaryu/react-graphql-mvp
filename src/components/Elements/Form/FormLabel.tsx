import { FormLabel as ChakraFormLabel } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const FormLabel: React.FC<Props> = ({ children, ...props }) => (
	<ChakraFormLabel {...props}>{children}</ChakraFormLabel>
);
