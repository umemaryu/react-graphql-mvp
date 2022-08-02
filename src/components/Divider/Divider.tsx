import { Divider as ChakraDivider } from "@chakra-ui/react";
import React from "react";

interface Props {
	mb: number;
}

const Divider: React.FC<Props> = ({ ...props }) => <ChakraDivider {...props} />;

export default Divider;
