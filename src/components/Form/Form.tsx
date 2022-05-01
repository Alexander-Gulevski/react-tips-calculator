import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { ITips, TipsOptions } from '../../types';
import Button from '../Button/Button';
import CustomSelect from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import { FormStyled, Title, Subtitle, InputGroup, TotalBill } from './styles';

const Form = () => {
    const initialTips = {
        total: 0,
        persons: '',
        bill: '',
        tip: 10,
    };

    const [tips, setTips] = useState<ITips>(initialTips);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const { bill, tip, persons } = tips;

    useEffect(() => {
        if (bill && persons) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [bill, persons]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (bill && tip && persons) {
            setTips({
                ...tips,
                total: (+bill + +bill * (+tip / 100)) / +persons,
            });
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setTips({
            ...tips,
            [name]: value ? +value : '',
        });
    };

    const handleSelect = (option: TipsOptions | null) => {
        if (option) {
            setTips({
                ...tips,
                tip: +option.value,
            });
        }
    };

    return (
        <FormStyled onSubmit={onSubmit}>
            <Title>Welcome to App</Title>
            <Subtitle>Let’s go calculate your tips</Subtitle>
            <InputGroup>
                <Input handleInput={handleInput} name={'bill'} value={bill} />
                <Input
                    handleInput={handleInput}
                    name={'persons'}
                    value={persons}
                />
                <CustomSelect handleSelect={handleSelect} />
            </InputGroup>
            <TotalBill>Total: {tips.total.toFixed(2)}$</TotalBill>
            <Button isDisabled={isDisabled} />
        </FormStyled>
    );
};

export default Form;
