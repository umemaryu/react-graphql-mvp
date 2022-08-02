import { Flex as ChakraFlex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	w: string;
}

const Flex: React.FC<Props> = ({ children, ...props }) => (
	<ChakraFlex {...props}>{children}</ChakraFlex>
);

export default Flex;
