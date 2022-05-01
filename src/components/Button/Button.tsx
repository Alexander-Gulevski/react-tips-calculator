import { ButtonStyled } from './styles';

interface IProps {
    isDisabled: boolean;
}

const Button = ({ isDisabled }: IProps) => {
    return (
        <ButtonStyled
            type="submit"
            disabled={isDisabled}
            $isDisabled={isDisabled}
        >
            Ohhhoooo 🍻{' '}
        </ButtonStyled>
    );
};

export default Button;
