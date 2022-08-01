import { Button as ChakraButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	onClick: () => void;
	children: ReactNode;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
	return <ChakraButton {...props}>{children}</ChakraButton>;
};

export default Button;
