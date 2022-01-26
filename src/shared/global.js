import { createGlobalStyle, css } from 'styled-components';

// import { color, typography } from './styles';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';

export const bodyStyles = css`
  /* Same as before */
  font-family: 'Roboto', sans-serif;
  /* background-color: rgba(7, 3, 41, 0.9); */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
