import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Toast } from "types";

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

	return { setError };
};
export default useCustomToast;
