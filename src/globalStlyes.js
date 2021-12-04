import { createGlobalStyle } from "styled-components";
import Righteous from "./assets/font/Righteous-Regular.ttf";
import Rubik from "./assets/font/Rubik-VariableFont_wght.ttf";
import PTSans from "./assets/font/PTSans-Regular.ttf";
// color codes
// #084C61(midnight green),hsla(184,50%,45%,1)(forest green),#AB81CD(lavendar floral),#FEC0AA(melon)

const Styles = createGlobalStyle`
@font-face {
    font-family: 'Righteous';
    src: url(${Righteous});
    }
 @font-face {
        font-family: 'Rubik';
        src: url(${Rubik});
    }
    @font-face {
        font-family: 'PT Sans';
        src: url(${PTSans});
    }
    body,
    html,
    a {
        font-family: 'Rubik', PT Sans,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    *{
      margin:0;
      padding:0;
      box-sizing: border-box;

      :focus {
        outline: none;
    }

    body {
        border: 0;
        outline: 0;
        background: #f9f9f9;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #333;
        transition: color 0.2s ease-in;

        :hover {
            color: hsla(184,50%,45%,1);
        }
    }

    h1, h2,h3,h4,h5,h6 {
        font-family: 'Rubik', sans-serif;
        color: #222;
        font-size: 2.575rem;
        line-height: 3.0625rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    h1 {
        color: hsla(184, 50%, 45%, 1);
        font-weight: 600;
    }

    h3 {
        font-size: 1.95rem;
    }
    p {
      color: #222;
      font-size: 0.956rem;
      line-height:1.525rem
    }
    span {
      color: #222;
        font-size: 0.8rem;
        line-height:1.4rem
    }

    img {
        width: 100%;

        @media only screen and (max-width: 768px) {
            width: 100%!important;
        }
    }

    input, button {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        background: transparent;
        border: 2px solid transparent;
        transition: 0.2s ease-in;
    }
    button {
        cursor:pointer;
    }
    .icons{
        width:1.5rem;
    }
    .no_cart{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`;

export default Styles;
