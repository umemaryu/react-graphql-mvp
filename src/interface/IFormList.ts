export interface IFormList {
	id: string;
	text: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	onChange: (value: string, id: string) => void;
}
