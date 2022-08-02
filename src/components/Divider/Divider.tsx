import { Divider as ChakraDivider } from "@chakra-ui/react";
import React from "react";

interface Props {
	mb: number;
}

export const Divider: React.FC<Props> = ({ ...props }) => (
	<ChakraDivider {...props} />
);
