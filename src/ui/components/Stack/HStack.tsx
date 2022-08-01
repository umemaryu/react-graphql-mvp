import { HStack as ChakraHStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	mb?: number;
	spacing?: number;
	w?: string;
}

const HStack: React.FC<Props> = ({ children, ...props }) => (
	<ChakraHStack {...props}>{children}</ChakraHStack>
);

export default HStack;
