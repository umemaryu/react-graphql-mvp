import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

type Props = Omit<InputProps, "onChange"> & {
	id: string;
	onChange: (value: string, id: string) => void;
};

export const FormInput = ({ id, onChange, ...props }: Props) => (
	<ChakraInput
		{...props}
		size="lg"
		onChange={(e) => onChange(e.target.value, id)}
	/>
);
