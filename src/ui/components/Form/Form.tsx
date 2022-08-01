import { IFormList } from "interface/IFormList";
import { theme } from "utils/theme";
import FormControl from "ui/components/Form/FormControl";
import FormHelperText from "ui/components/Form/FormHelperText";
import FormLabel from "ui/components/Form/FormLabel";
import Input from "ui/components/Input/Input";
import Box from "ui/components/Box/Box";

interface Props {
	list: IFormList[];
}

const Form: React.FC<Props> = ({ list }) => (
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

export default Form;
