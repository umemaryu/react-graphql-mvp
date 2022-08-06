export interface IFormList {
	text: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	onChange?: (value: string) => void;
}
