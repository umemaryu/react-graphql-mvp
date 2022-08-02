import { IFormList } from "interface/IFormList";
import { theme } from "utils/theme";
import { FormControl } from "components/Form/FormControl";
import { FormHelperText } from "components/Form/FormHelperText";
import { FormLabel } from "components/Form/FormLabel";
import { Input } from "components/Input/Input";
import { Box } from "components/Box/Box";

interface Props {
	list: IFormList[];
}

export const Form: React.FC<Props> = ({ list }) => (
	<FormControl>
		{list.map((ele) => (
			<Box mt={theme.m.sm} mb={theme.m.sm} key={ele.text}>
				<FormLabel>{ele.text}</FormLabel>
				<Input {...ele} />
			</Box>
		))}
		<Box textAlign="center" mt={theme.m.sm} mb={theme.m.sm}>
			<FormHelperText>Wrong something.</FormHelperText>
		</Box>
	</FormControl>
);
