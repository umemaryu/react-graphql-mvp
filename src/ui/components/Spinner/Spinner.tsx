import { Spinner as ChakraSpinner } from "@chakra-ui/react";
import React from "react";

interface Props {
	size: string;
}

const Spinner: React.FC<Props> = () => {
	return <ChakraSpinner />;
};

export default Spinner;
