import React , {useState, useEffect, useCallback} from 'react';

import {Pista, Carro, Mensagem, Menu, Container, Header, Nickname, Score, Rocha} from './styled';

import {Link} from 'react-router-dom';

export default function Racing(){
    const [carPosition, setCarPosition] = useState(300);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [rockPosition, setRockPosition] = useState(0);
    const [collision, setCollision] = useState(false);
    const [score, setScore] = useState(0);

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
                    setMessage('Paused')
                    return setStarting((starting)=>!starting)
                }
                default:
                    return;     
             }  
         
    } ,[])


    useEffect(()=>{
        window.addEventListener('keydown', handlePosition )
        return () => {
            window.removeEventListener('keydown',handlePosition)
          };
    },[handlePosition])

   
    
    const generatePositionRadomObstacle = useCallback(()=>{
        if (starting) 
              return Math.floor(Math.random()*(450-100+1))+100;    
                else 
                    return rockPosition;             
      },[starting, rockPosition])
      
   
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setRockPosition(generatePositionRadomObstacle())
        }, 3000)

     return()=>{
            clearInterval(intervalo)
        }
    },[generatePositionRadomObstacle])


    const checkCollision = useCallback((rockPosition, carPosition)=>{
              
        if(carPosition===300 && rockPosition<=370 && rockPosition>=230) {
            setCollision(true)
        }else 
            if (carPosition===50 && rockPosition<=200 && rockPosition>=50){
                setCollision(true)
            }else 
                if (carPosition===500 && rockPosition<=500 && rockPosition>=350){
                setCollision(true)
                }
                    else setCollision(false);
                 
                console.log({carPosition, rockPosition, collision})
    
    },[collision])

    useEffect(()=>{    
        
        checkCollision(rockPosition, carPosition)
      
    },[checkCollision, carPosition, rockPosition])

    
    const checkGameOver = useCallback((isCollision, isStarting)=>{
        if (isCollision && isStarting){
            setStarting(false)
            setMessage(`Game Over`)
        } else return ;
      
    },[])

    useEffect(()=>{
        checkGameOver(collision, starting)
    },[checkGameOver,collision, starting])


    const incrementScore = useCallback((isCollision, isStarting)=>{
       if(isCollision){
           setScore(score=>score)
       } else 
            if(!isCollision && isStarting)
                     setScore(score=>score+1)

    },[rockPosition, carPosition])

   useEffect(()=>{
        incrementScore(collision, starting)
    },[incrementScore, collision, starting])

    return(
        <>
       
        <Container>
       
        <Pista starting={starting} >
            <Header>
                <Nickname>{nickname && nickname}</Nickname>
                <Score> Score: {score}</Score>
            </Header>
            

            <Mensagem >{!starting && message }</Mensagem>

           {!starting && (
               <Menu>
                    <Link to={'/'}>Continue</Link>
                    <Link to={'/'}>Restart</Link>
                    <Link to={'/'}>Score Record</Link>
               </Menu>
               
            )}
         
           
            

            <Rocha rockPosition={rockPosition}/>
            <Carro position={carPosition} />
        </Pista>
           
           
        </Container>
      
      
       </>
    )
}
