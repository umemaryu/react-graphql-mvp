import { VStack as ChakraVStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	mb?: number;
	spacing?: number;
	w?: string;
}

const VStack: React.FC<Props> = ({ children, ...props }) => (
	<ChakraVStack {...props}>{children}</ChakraVStack>
);

export default VStack;
