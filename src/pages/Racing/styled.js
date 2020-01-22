import styled from 'styled-components';

import cenario from '../../assets/imgs/CENARIO_anima.gif'
import cenario_pausado from '../../assets/imgs/CENARIO_anima.jpg';

import carro from '../../assets/imgs/CARRO.png';

export const Container = styled.div`
    display:flex;
    flex:1;
    width:100%;
    height:100vh;
    background:rgba(0,0,0,.7);
`;


export const Pista = styled.div`
   
    width:100%;
    max-width: 600px;
    
    margin: 2rem auto;
   
    background-image: url(${props => props.starting ? cenario: cenario_pausado});
    background-repeat: no-repeat;
    background-size: 100%;

    @media(max-width:500px){
       margin:10rem auto;
    }
    
    
`

export const Mensagem = styled.strong`
    text-align: center;
    display: block;
    font-size:2rem;     
    padding:100px;
    color:#000;
    
  
      
`;

export const Carro = styled.img.attrs({
    src: carro
})`
 
    position:absolute;  
    height:180px;
    top:400px; 
    left: ${props => `${props.position}%`};
    
    
   
`

