import styled from 'styled-components';

export const ButtonStyled = styled.button<{ $isDisabled: boolean }>`
    padding: 13px;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #ffffff;

    background: #2ed2c9;
    opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;
