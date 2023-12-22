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
        color: black;
    }

    /* Estilos para a barra de rolagem */
    ::-webkit-scrollbar {
        width: 10px; /* Largura da barra de rolagem */
    }

    /* Estilos para o "trilho" da barra de rolagem (a área cinza) */
    ::-webkit-scrollbar-track {
        background-color: #fff; /* Cor de fundo do trilho */
    }

    /* Estilos para a "alça" da barra de rolagem (a parte que você arrasta) */
    ::-webkit-scrollbar-thumb {
        background-color: #c58c12; /* Cor da alça */
        height: 100px;
    }

`

export default GlobalStyle;