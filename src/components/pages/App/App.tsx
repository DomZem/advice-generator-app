import { GlobalStyle } from 'lib/style/GlobalStyle';
import { theme } from 'lib/style/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<div>Hello there, young jedi!</div>
	</ThemeProvider>
);

export default App;
