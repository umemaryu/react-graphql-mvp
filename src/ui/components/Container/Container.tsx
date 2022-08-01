import { Container as ChakraContainer } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	borderRadius?: number;
	border: string;
	w?: string;
	h?: string;
	mt?: number;
}

const Container: React.FC<Props> = ({ children, ...props }) => (
	<ChakraContainer {...props}>{children}</ChakraContainer>
);

export default Container;
