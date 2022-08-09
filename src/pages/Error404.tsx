import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
	id: number | undefined;
	loading: boolean;
};

export const Error404: React.FC<Props> = ({ id, loading }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!loading) {
			if (id) navigate("/profile");
			else navigate("/login");
		}
	}, [navigate, id, loading]);
	return <></>;
};
