import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

type Toast = {
	title: string;
	description: string;
};

const useCustomToast = (state: Toast) => {
	const error = useToast();
	const success = useToast();
	useEffect(() => {
		error({
			title: state.title,
			description: state.description,
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	}, [state, error]);
	useEffect(() => {
		error({
			title: state.title,
			description: state.description,
			status: "error",
			duration: 3000,
			isClosable: true,
		});
	}, [state, error]);
	return { error, success };
};

export default useCustomToast;
