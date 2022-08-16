import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Toast = {
	title: string;
	description: string;
};

const useCustomToast = () => {
	const [error, setError] = useState<Toast>({ title: "", description: "" });
	const toast = useToast();
	useEffect(() => {
		if (error.description || error.title)
			toast({
				title: error.title,
				description: error.description,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
	}, [error, toast]);
	const [success, setSuccess] = useState<Toast>({ title: "", description: "" });
	useEffect(() => {
		if (success.description || success.title)
			toast({
				title: success.title,
				description: success.description,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
	}, [success, toast]);
	return { setError, setSuccess };
};
export default useCustomToast;
