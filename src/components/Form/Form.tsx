import {
	Box,
	FormControl,
	FormHelperText,
	FormInput,
	FormLabel,
} from "components/Elements";
import { IFormList } from "interface/IFormList";
import { theme } from "utils/theme";

interface Props {
	list: IFormList[];
	onChange: (value: string, id: string) => void;
}

export const Form: React.FC<Props> = ({ list, onChange }) => (
	<FormControl>
		{list.map((ele) => (
			<Box mt={theme.m.sm} mb={theme.m.sm} key={ele.text}>
				<FormLabel>{ele.text}</FormLabel>
				<FormInput
					type={ele.type}
					placeholder={ele.placeholder}
					id={ele.id}
					onChange={onChange}
				/>
			</Box>
		))}
		<Box textAlign="center" mt={theme.m.sm} mb={theme.m.sm}>
			<FormHelperText>Wrong something.</FormHelperText>
		</Box>
	</FormControl>
);
