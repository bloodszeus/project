import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
* {
box-sizing: border-box;
}
input:focus {
outline: none;
}

body {
margin: 0;
padding: 0;
font-family: 'Poppins', sans-serif;

}`;
