import Form from './components/Form/Form';
import styled from 'styled-components';
import circles from './assets/circles.svg';

const App = () => {
	const StyledApp = styled.div`
	max-width: 1512px;
	width: 100%;	
	height: calc(96vh);
	display: flex;
	place-items: center;
	margin: 0px auto;
	
	background: url(${circles}),rgba(234, 242, 242, 1);
	background-repeat: no-repeat;
`;
	return (
		<StyledApp>
			<Form />
		</StyledApp>
	);
};

export default App;