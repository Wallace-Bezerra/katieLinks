import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";
export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Lato', sans-serif;
  color: inherit;
}
body{
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* background-color: ${({ theme }) => theme.bg} */
  background-image: url(${background});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  /* ::before{
    content:"";
    display:block;
    background-color: #000;
    position:absolute;
    min-width: 100vw;
    min-height:100vh;
    opacity: 0.6;
  }   */
}
`;
