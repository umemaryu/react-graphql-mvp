import { Grid as ChakraGrid } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	templateColumns: string;
	w: string;
}

const Grid: React.FC<Props> = ({ children, ...props }) => (
	<ChakraGrid {...props}>{children}</ChakraGrid>
);

export default Grid;
