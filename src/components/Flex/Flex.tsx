import { Flex as ChakraFlex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	w: string;
}

export const Flex: React.FC<Props> = ({ children, ...props }) => (
	<ChakraFlex {...props}>{children}</ChakraFlex>
);
