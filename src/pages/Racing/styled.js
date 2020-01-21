import styled from 'styled-components';

import cenario from '../../assets/imgs/CENARIO_anima.gif'
import cenario_pausado from '../../assets/imgs/CENARIO_anima.jpg';

import carro from '../../assets/imgs/CARRO.png';

export const Pista = styled.div`
    width: 500px;
    height: 600px;
    background-image: url(${props => props.starting ? cenario: cenario_pausado});
    background-repeat: no-repeat;
    background-size: 100%;

        h1{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:1.5rem;
        }
    
`

export const Carro = styled.img.attrs({
    src: carro
})`
    width: 180px;
    position:relative;
    top:280px;
    left: ${props => `${props.position}px`};
    
`

export const Joystick = styled.input`
   
    opacity:0;
    width: 550px;
    height: 550px;
    position:absolute;
    top:0;
    left:0
    `;
