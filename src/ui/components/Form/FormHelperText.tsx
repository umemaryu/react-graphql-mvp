import { FormHelperText as ChakraFormHelperText } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const FormHelperText: React.FC<Props> = ({ children, ...props }) => (
	<ChakraFormHelperText {...props}>{children}</ChakraFormHelperText>
);
