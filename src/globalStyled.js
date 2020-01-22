import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

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
        background:#fafafa;
    }
    html , body , #root {
        height:100%;
    }
`;