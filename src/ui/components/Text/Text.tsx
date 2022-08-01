import { Text as ChakraText } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	color?: string;
	textAlign?: "center";
	mt?: number;
	mb?: number;
	fontSize?: {
		sm: string;
		md: string;
		lg: string;
	};
	borderBottom?: string;
	borderLeft?: string;
	display?: string;
	cursor?: string;
	bg?: string;
	h?: string;
	lineHeight?: string;
	onClick?: () => void;
}

const Text: React.FC<Props> = ({ children, ...props }) => (
	<ChakraText {...props}>{children}</ChakraText>
);

export default Text;
