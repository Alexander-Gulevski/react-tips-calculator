import { StyledInput } from './styles';

interface IInput {
	placeholderText: string;
	value: any;
	onChange: any;
}

const Input = ({ placeholderText, value, onChange }: IInput) => {
	return (
			<StyledInput
				placeholder={placeholderText} onChange={onChange} value={value} required 
			/>
	);
};

export default Input;