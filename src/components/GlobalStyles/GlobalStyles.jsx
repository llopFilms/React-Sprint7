import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: ${({theme})=>theme.fontSizeGeneral};
}

body {
  background-color: ${({theme})=>theme.colors.fonsPagina};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ theme }) => theme.colors.lletra};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
