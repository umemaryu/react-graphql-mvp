import { Center as ChakraCenter } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	h?: string;
}

export const Center: React.FC<Props> = ({ children, ...props }) => (
	<ChakraCenter {...props}>{children}</ChakraCenter>
);
