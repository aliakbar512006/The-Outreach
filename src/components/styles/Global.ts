import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    
    body {
        font-weight: 300;
        line-height: 1;
        overflow-x: hidden;
        background-color: white;
        color: black;
        font-family: "Nunito", sans-serif;
    }
    
    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        font-size: normal;
    }
    
    @font-face {
        font-family: "Poppins-Reguar";
        src: local("Poppins-Regular"), url(../../assets/fonts/Poppins/Poppins-Regular.woff) format("woff");
    }
    
    @font-face {
        font-family: "Poppins-SemiBold";
        src: local("Poppins-SemiBold"), url(../../assets/fonts/Poppins/Poppins-SemiBold.woff) format("woff");
    } 
`
