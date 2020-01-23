import React , {useState, useEffect, useCallback} from 'react';

import {Pista, Carro, Mensagem, Container, Nickname} from './styled';


export default function Racing(){
    const [position, setPosition] = useState(300);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
   
    

    useEffect(()=>{
       setNickname(localStorage.getItem('@nickname')) 
    },[])
   
    useEffect(()=>{
      
            setMessage('3 ...')                 

        setTimeout(()=>{
            setMessage('2 ...')                 
        },1000)

        setTimeout(()=>{
            setMessage('1 ...')                 
        },2000)

        setTimeout(()=>{
            setMessage('GO !')    
                         
        },3000)


        setTimeout(()=>{
           setStarting(true);         
        },3300)
    },[])




  
    useEffect(()=>{
        setTimeout(()=>{
            setMessage('Congrulation Wins')
            setStarting(false);         
        },60000)
    },[])

    
    const handlePosition = useCallback( (event)=> {
            event.preventDefault();
            
             switch(event.key){
                case 'a':
                    return setPosition(50)
                case 's':
                    return setPosition(300)
                case 'd':
                    return setPosition(500);
                case 'ArrowLeft':
                    return setPosition(50) 
                case 'ArrowRight':
                    return setPosition(500)   
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
        
            <Pista starting={starting} >
            <Nickname>{nickname && nickname}</Nickname>
                <Mensagem >{!starting && message }</Mensagem>

            <Carro position={position} />
            </Pista>
           
           
        </Container>
      
      
       </>
    )
}
