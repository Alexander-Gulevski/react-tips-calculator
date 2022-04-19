import Input from './../Input/Input';
import CustomSelect from './../CustomSelect/CustomSelect';
import Button from './../Button/Button';
import {
	StyledForm,
	Title,
	Subtitle,
	InputContainer,
	Total,
} from './styles';
import { IForm } from '../../types';
import { useState } from 'react';

const Form = () => {
	const [totalTips, setTotalTips] = useState<IForm>({
		persons: 0,
		total: 0,
		bill: 0,
		tip: 0,
	});
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		setTotalTips({
			...totalTips,
			bill: +event.target.value,
		});
	};
	const handlePersons = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTotalTips({
			...totalTips,
			persons: +event.target.value,
		});
	  };
	  const handleTips= (event: React.ChangeEvent<HTMLInputElement>) => {
		setTotalTips({
			...totalTips,
			tip: +event.target.value,
		});
	  };
	  const handleCountTips = () => {
		const persent =
		  ((totalTips.bill / 100) * 10) / totalTips.persons;
		  console.log(totalTips.tip)
		setTotalTips({
			...totalTips,
		  total: persent,
		});
	  };

	return (
		<StyledForm onSubmit={handleCountTips}>
			<Title>Welcome to App</Title>
			<Subtitle>Let’s go calculate your tips</Subtitle>
			<InputContainer>
				<Input placeholderText={'Enter bill'} value={totalTips.bill}
				onChange={handleChange}/>
				<Input placeholderText={'Enter persons'} value={totalTips.persons}
				onChange={handlePersons}/>
				<CustomSelect onChange={handleTips} />
			</InputContainer>
			<Total onClick={handleCountTips}>Total: {totalTips.total.toFixed(2)}$</Total>
			<Button />
		</StyledForm>
	);
};

export default Form;