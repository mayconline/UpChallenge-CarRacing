import React , {useState, useEffect, useCallback} from 'react';

import {Pista, Carro, Mensagem, Container, Nickname, Rocha} from './styled';


export default function Racing(){
    const [carPosition, setCarPosition] = useState(300);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [rockPosition, setRockPosition] = useState(0);
    const [collision, setCollision] = useState(false);
    

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
                    return setCarPosition(50)
                case 's':
                    return setCarPosition(300)
                case 'd':
                    return setCarPosition(500);
                case 'ArrowLeft':
                    return setCarPosition(50) 
                case 'ArrowRight':
                    return setCarPosition(500)   
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

   
    
    const generateValueRadom = useCallback(()=>{
        if (starting) 
              return Math.floor(Math.random()*(450-100+1))+100;                 
      },[starting])
      
   
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setRockPosition(generateValueRadom())
        }, 3000)

     return()=>{
            clearInterval(intervalo)
        }
    },[generateValueRadom])


    const checkCollision = useCallback((rockPosition, carPosition)=>{

                    if(carPosition===300 && rockPosition<=370 && rockPosition>=230) {
                        setCollision(true)
                    }else if (carPosition===50 && rockPosition<=200 && rockPosition>=50){
                        setCollision(true)
                    }else if (carPosition===500 && rockPosition<=500 && rockPosition>=350){
                        setCollision(true)
                    }
                       else setCollision(false);
           
           
           
                console.log({carPosition, rockPosition, collision})
    
    },[collision])

    useEffect(()=>{
        checkCollision(rockPosition, carPosition)
    },[checkCollision, carPosition, rockPosition])

    

    return(
        <>
        
        <Container>
        
            <Pista starting={starting} >
            <Nickname>{nickname && nickname}</Nickname>
                <Mensagem >{!starting && message }</Mensagem>

            <Rocha rockPosition={rockPosition}/>
            <Carro position={carPosition} />
            </Pista>
           
           
        </Container>
      
      
       </>
    )
}
