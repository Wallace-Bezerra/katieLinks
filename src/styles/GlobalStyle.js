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
  transition: width .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: #000;
  background-image: url(${background});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
`;
