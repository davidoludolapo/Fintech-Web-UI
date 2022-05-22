import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --purple-primary: #0C1825;
  --accent-pink: #1231B5;
  --neutral-light: #F2F6FF;
  --lavender-secondary: #40514E; /*Primary Font Color*/
  --dark-primary: #16194F;
  --border-colour: #CAD6F1;

}
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        text-decoration: none;
    }

    body{

        background-color:var(--neutral-light);
        color: white;
        font-size: 1.2rem;
    }

    p{
        color: var(--lavender-secondary);
        line-height: 1.9;
    }

    a{
        text-decoration: none;
    }

    .secondary-heading{
        font-size: 2.7rem;
        color: var(--purple-primary);
    }

    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary); 
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }

    //utilities
    .c-para{
        text-align: center;
    }

`;

export default GlobalStyle;
