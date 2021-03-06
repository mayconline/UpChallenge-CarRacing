import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    
    body {
        font-family:'Bangers', cursive, Arial, Helvetica, sans-serif;
        font-size:14px;      
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing:antialiased;
        background: linear-gradient(
         to right top,
            #d16ba5,
            #cd5dad,
            #c551b7,
            #b847c4,
            #a541d2,
            #a254de,
            #9e65e9,
            #9b74f3,
            #b298f9,
            #cabafd,
            #e4ddff,
            #ffffff
        );
        background-size: cover;
        background-repeat: no-repeat;

         @media (max-width: 768px) {
         background: #e4ddff;
        }

          
   }

    html , body , #root {
        height:100%;    
    }
`;
