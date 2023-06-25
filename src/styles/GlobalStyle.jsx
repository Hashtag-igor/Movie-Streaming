import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
        font-family: 'Inter', sans-serif;
    }

    a {
        text-decoration: none;
        color: white;
    }

`

export default GlobalStyle;