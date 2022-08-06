import { IFormList } from "interface/IFormList";
import { theme } from "utils/theme";
import { FormControl } from "components/Elements/Form/FormControl";
import { FormHelperText } from "components/Elements/Form/FormHelperText";
import { FormLabel } from "components/Elements/Form/FormLabel";
import { Box } from "components/Elements/Box/Box";
import { FormInput } from "components/Elements/Form/FormInput";

interface Props {
	list: IFormList[];
	onChange: (value: string, id: string) => void;
}

export const Form: React.FC<Props> = ({ list,onChange }) => (
	<FormControl>
		{list.map((ele) => (
			<Box mt={theme.m.sm} mb={theme.m.sm} key={ele.text}>
				<FormLabel>{ele.text}</FormLabel>
				<FormInput {...ele} onChange={onChange} />
			</Box>
		))}
		<Box textAlign="center" mt={theme.m.sm} mb={theme.m.sm}>
			<FormHelperText>Wrong something.</FormHelperText>
		</Box>
	</FormControl>
);
