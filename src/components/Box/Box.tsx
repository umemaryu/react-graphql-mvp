import { Box as ChakraBox } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	textAlign?: "center";
	w?: string;
	pt?: number;
	mt?: number;
	mb?: number;
	border?: string;
	onClick?: () => void;
}

export const Box: React.FC<Props> = ({ children, ...props }) => (
	<ChakraBox {...props}>{children}</ChakraBox>
);
