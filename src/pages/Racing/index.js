import React , {useState, useEffect} from 'react';

import {Pista, Carro, Joystick} from './styled';

export default function Racing(){
    const [position, setPosition] = useState(150);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('3, 2 , 1 ...');
   
    useEffect(()=>{
        setTimeout(()=>{
            setStarting(true);
            setMessage('');
        },3000)
    },[])
  



    function handlePosition(event){
    
        if(event.key === 'a') return setPosition(0);
        if(event.key === 's') return setPosition(150);
        if(event.key === 'd') return setPosition(300);

        if(event.key === 'ArrowLeft') return setPosition(0);
        if(event.key === 'ArrowRight') return setPosition(300);
    }

  
    

    return(
       <Pista starting={starting} >
           <h1>{message}</h1>
           <Carro position={position} />
            <Joystick onKeyDown={handlePosition} autoFocus  />
          
           
       </Pista>
    )
}