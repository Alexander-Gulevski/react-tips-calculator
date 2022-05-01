import { InputStyled } from './styles';

interface IProps {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: number | string;
}

const Input = ({ handleInput, name, value }: IProps) => {
    return (
        <InputStyled
            onChange={handleInput}
            name={name}
            placeholder={`enter ${name}`}
            type={'number'}
            value={value}
        />
    );
};

export default Input;
