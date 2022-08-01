import { Button as ChakraButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	onClick: () => void;
	children: ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
	return <ChakraButton onClick={onClick}>{children}</ChakraButton>;
};

export default Button;
