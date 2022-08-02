import { Button as ChakraButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	mb?: number;
	isFullWidth?: boolean;
	onClick: () => void;
}

export const Button: React.FC<Props> = ({
	children,
	isFullWidth,
	...props
}) => (
	<ChakraButton
		w={isFullWidth ? "100%" : "initial"}
		colorScheme={"blue"}
		{...props}
	>
		{children}
	</ChakraButton>
);
