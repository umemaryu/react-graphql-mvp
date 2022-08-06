import { Spinner as ChakraSpinner } from "@chakra-ui/react";
import React from "react";

interface Props {
	size: string;
}

export const Spinner: React.FC<Props> = ({ ...props }) => (
	<ChakraSpinner {...props} />
);
