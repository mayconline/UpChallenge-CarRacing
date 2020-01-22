import styled from 'styled-components';

import cenario from '../../assets/imgs/CENARIO_anima.gif'
import cenario_pausado from '../../assets/imgs/CENARIO_anima.jpg';

import carro from '../../assets/imgs/CARRO.png';

export const Container = styled.div`
 
    position: relative;
    background:rgba(0,0,0,.7);
    top:0;
    left:0;  
`;


export const Pista = styled.div`

    position: relative;
    background-image: url(${props => props.starting ? cenario: cenario_pausado});
    background-repeat: no-repeat;
    background-size: 100%;
    width:800px;
    height:100vh;
    margin:0 auto;

    
    
`

export const Nickname = styled.strong`
    text-align: left;
    display: block;
    padding:1rem;
    font-size:1.3rem;     
    color:#000;
  
      
`;

export const Mensagem = styled.strong`
    text-align: center;
    display: block;
    font-size:2rem;     
    padding:5rem;
    color:#000; 
      
`;

export const Carro = styled.img.attrs({
    src: carro
})`
   
    height:180px;
    top:450px;
    left: ${props => `${props.position}px`};
    position: absolute;
   
`
