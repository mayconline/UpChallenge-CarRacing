import React , {useState, useEffect} from 'react';

import {Pista, Carro, Joystick, Mensagem, Container} from './styled';

export default function Racing(){
    const [position, setPosition] = useState(44);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('3, 2 , 1 ...');
   
    useEffect(()=>{
        setTimeout(()=>{
            setStarting(true);         
        },3000)
    },[])
  



    function handlePosition(event){
    
        if(event.key === 'a') return setPosition(31);
        if(event.key === 's') return setPosition(44);
        if(event.key === 'd') return setPosition(57);

        if(event.key === 'ArrowLeft') return setPosition(position-13);
        if(event.key === 'ArrowRight') return setPosition(position+13);

        if(event.key === 'Escape') {
            setStarting(!starting) 
            return setMessage('Pausado')
        }
               
       
    }

  
    

    return(
        <>
        <Container>
            <Pista starting={starting} >
                <Mensagem >{!starting && message }</Mensagem>
                <Carro position={position} />  
                <Joystick onKeyDown={handlePosition} autoFocus  />
            </Pista>

        </Container>
      
      
       </>
    )
}