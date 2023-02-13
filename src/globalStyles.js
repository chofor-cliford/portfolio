import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
 } 

 :root{
  --font-base: 'DM Sans' ,sans-serif;
  --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #fff;
 }
`;

export const AppContainer = styled.div`
  font-family: var(--font-base);
  background: var(--primary-color);
`;

export const Container = styled.div`
  background: var(--white-color);
  
`;

export default GlobalStyle;
