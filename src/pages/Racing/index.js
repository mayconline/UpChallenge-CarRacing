import React , {useState, useEffect, useCallback} from 'react';

import {Pista, Carro, Mensagem, Container} from './styled';

export default function Racing(){
    const [position, setPosition] = useState(44);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('3, 2 , 1 ...');
    const [nickname, setNickname] = useState('');
  

    useEffect(()=>{
       setNickname(localStorage.getItem('@nickname')) 
    },[])
   
    useEffect(()=>{
        setTimeout(()=>{
            setStarting(true);         
        },3000)
    },[])
  

    
    const handlePosition = useCallback( (event)=> {
            event.preventDefault();
            
             switch(event.key){
                case 'a':
                    return setPosition(31)
                case 's':
                    return setPosition(44)
                case 'd':
                    return setPosition(57);
                case 'ArrowLeft':
                    return setPosition(31) 
                case 'ArrowRight':
                    return setPosition(57)   
                case 'Escape': {
                    setMessage('Pausado')
                    return setStarting((starting)=>!starting)
                }
                default:
                    return;     
             }  
        } ,[])


    useEffect(()=>{
        window.addEventListener('keydown', handlePosition )
        return () => {
            window.removeEventListener('keydown',handlePosition )
          };
    },[handlePosition])


    

    return(
        <>
           
        <Container>
            {nickname}
            <Pista starting={starting} >
                <Mensagem >{!starting && message }</Mensagem>
                <Carro position={position} />  
            </Pista>

        </Container>
      
      
       </>
    )
}