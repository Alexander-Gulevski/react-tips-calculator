import styled from 'styled-components';
import cirlces from './assets/circles.svg';
import Form from './components/Form/Form';

const App = () => {
    return (
        <AppStyled>
            <Form />
        </AppStyled>
    );
};

export default App;

export const AppStyled = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: no-repeat top left url(${cirlces}), #eaf2f2;
    overflow: hidden;
`;
