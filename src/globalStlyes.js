import { createGlobalStyle } from "styled-components";
import Mabry from "./assets/font/MabryPro.otf";
import MabryLight from "./assets/font/MabryProLight.otf";
import MabryBold from "./assets/font/MabryProBold.otf";
// color codes
// #084C61(midnight green),hsla(184,50%,45%,1)(forest green),#AB81CD(lavendar floral),#FEC0AA(melon)

const Styles = createGlobalStyle`

     @font-face {
        font-family: 'Mabry Pro';
        src: url(${Mabry});
    }
    @font-face {
        font-family: 'Mabry Pro Light';
        src: url(${MabryLight});
    }
    @font-face {
        font-family: 'Mabry Pro Bold';
        src: url(${MabryBold});
    }
    body,
    html,
    a {
        font-family: 'Mabry Pro Light',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
font-family: 'Mabry Pro';
        :hover {
            color: hsla(163,53%,46%,0.8);
        }
    }

    h1, h2,h3,h4,h5,h6 {
        font-family: 'Mabry Pro', sans-serif ;
        color: hsla(163,53%,46%,0.8);
        font-size: 2.575rem;
        line-height: 3.0625rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    h3 {
        font-size: 1.95rem;
    }
    p {
      color: #222;
      font-size: 0.956rem;
      line-height:1.525rem
   font-family:'Mabry Pro Light'
    }
    span {
      color: #222;
        font-size: 0.8rem;
        line-height:1.4rem
         font-family:'Mabry Pro Light'
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
   .span{
     margin-left: 10px;
     color: inherit;
     font-size: inherit;
  }



.loader-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
    position: absolute;
width: 100%;
z-index: 100;
top: 0;
right: 0;
}
.text{
	margin-top:20px;
	color: #fff;
	text-align: center;
   margin-top: 70px;
}


.loader{
    display: flex;
    justify-content: center;
    height: 50px;
    animation: rotate 3s linear infinite;
    transform-origin: bottom center;
}
@keyframes rotate{
    to{transform: rotate(360deg);}
}
.spin{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: hsla(163, 53%, 46%, 0.8);
    transform: scale(0.2);
    margin: -5px;
    animation: grow 1.5s linear infinite;
}
.spin-2{
    background-color:  hsla(163, 53%, 46%, 0.8);
    animation-delay: 0.75s;
}
@keyframes grow{
    50%{transform: scale(1);}
}
`;

export default Styles;
