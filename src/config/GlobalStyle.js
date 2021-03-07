import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    background-color: #51A94B;
    *,
  *::after,*::before {
    box-sizing: inherit;
    font-family: 'Mulish', sans-serif;
    }
  h1,h2,h3,h4,h5,h6,p {
   margin: 0;
   padding: 0;
   }
  }
`
export default GlobalStyle
