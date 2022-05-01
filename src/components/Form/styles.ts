import styled from 'styled-components';

const FormStyled = styled.form`
    display: grid;
    grid-gap: 45px;
    width: 100%;
    max-width: 410px;
    padding: 40px;

    @media screen and (min-width: 992px) {
        max-width: 540px;
    } ;
`;

const Title = styled.h2`
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;
    text-align: center;
    color: #000000;

    @media screen and (min-width: 992px) {
        font-size: 40px;
        line-height: 58px;
    }
`;

const Subtitle = styled.p`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.3px;
    text-align: center;
    color: rgba(117, 108, 108, 0.57);

    @media screen and (min-width: 992px) {
        font-size: 32px;
        line-height: 38px;
    }
`;

const InputGroup = styled.div`
    display: grid;
    grid-gap: 15px;
`;

const TotalBill = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;
    color: #000000;
`;

export { FormStyled, Title, Subtitle, InputGroup, TotalBill };
