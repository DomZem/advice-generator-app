import Adivice from 'components/organisms/Advice/Advice';
import { GlobalStyle } from 'lib/style/GlobalStyle';
import { theme } from 'lib/style/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Adivice />
	</ThemeProvider>
);

export default App;
