import {THEME} from './lib/constants/theme';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Router from "./modules/Router";

const App = () => (
  <ThemeProvider theme={THEME}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);

export default App;
