import styled from 'styled-components';

import cenario from '../../assets/imgs/CENARIO_anima.gif'
import cenario_pausado from '../../assets/imgs/CENARIO_anima.jpg';

import carro from '../../assets/imgs/CARRO.png';
import rocha from '../../assets/imgs/rock.png';

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

export const Header = styled.header`
    
  display:flex;
  justify-content:space-between;

      
`;


export const Nickname = styled.strong`
    text-align: left;
    display: block;
    padding:1rem;
    font-size:1.3rem;     
    color:#000;
    text-transform:capitalize;
      
`;

export const Score = styled.strong`
    text-align: left;
    display: block;
    padding:1rem;
    font-size:1.3rem;     
    color:#000;
  
      
`;

export const Laps = styled.strong`
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
    padding:3rem;
    color:#000; 
      
`;



export const Menu = styled.aside`
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    
        a{
            text-decoration:none;
            font-size:2rem;

            width:50%;
            border: 0;
            margin-top: 0.5rem;
            background: #7d40e7;
            border-radius: 2px;
            padding: 15px 20px;
            font-size: 16px;
            font-weight: bold;
            color:#fff;
            cursor: pointer;
            transition: background 0.5s;

                :hover{
                    background: #6931ca;
                }
        }
      
`;


export const Carro = styled.img.attrs({
    src: carro
})`
   
    height:180px;
    top:450px;
    left: ${props => `${props.position}px`};
    position: absolute;
    transition:left 1s;
   
`
export const Rocha = styled.img.attrs({
    src: rocha
})`
   
    height:150px;
    width:220px;
    top:380px;
    left: ${props => `${props.rockPosition}px`};
    opacity:${props => `${props.rockOpacity}`};
    position: absolute;
    transition:left 1s, opacity 1s;
    
   
`