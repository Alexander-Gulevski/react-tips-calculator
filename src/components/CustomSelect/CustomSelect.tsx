import { StyledSelect } from './styles';
import Select from 'react-select';
interface ICustomSelect{
	onChange:any;
}
const CustomSelect = (onChange:ICustomSelect) => {
	const items = [
		{ value: '10', label: '10',},
		{ value: '15', label: '15',},
		{ value: '20', label: '20',},
	]

	return (
		<Select
			className={StyledSelect}
			defaultValue={items[0]}
			options={items}
		/>
	);
};

export default CustomSelect;