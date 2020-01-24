import React , {useState, useEffect, useCallback} from 'react';

import {Pista, Carro, Mensagem, Menu, Container, Header, Nickname, Score, Laps, Rocha} from './styled';

import {Link} from 'react-router-dom';

export default function Racing(){
    const [carPosition, setCarPosition] = useState(300);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [rockPosition, setRockPosition] = useState(0);
    const [collision, setCollision] = useState(false);
    const [score, setScore] = useState(0);
    const [laps, setLaps] = useState(0);
    const [winner, setWinner] = useState(false);

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

 
        

      const verifyNumberLaps = useCallback((numberLaps, isStarting)=>{
            if(numberLaps<4 && isStarting){
                setLaps((laps)=>laps+1)
               
            }
            else 
                if(numberLaps === 4 ){
                    setWinner(true)
                    setMessage('Congrulation Wins')
                    setStarting(false)
                    
                    
            } 
                
            
                
      },[])


      useEffect(()=>{
        const intervalLaps = setInterval(()=>{
            verifyNumberLaps(laps, starting)
        }, 2000)

             return()=>{
                 clearInterval(intervalLaps)
                }
    },[laps, verifyNumberLaps, starting])

      
  

    
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
        }, 5000)

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
                 
               
    
    },[])

    useEffect(()=>{    
        
        checkCollision(rockPosition, carPosition)
      
    },[checkCollision, carPosition, rockPosition])


    function setScoreLocalStorage(nicknameValue, scoreValue){
        let _id = new Date()
        
        let objScore = {
            _id,
            nicknameValue,
            scoreValue
        }    
          const parseObjScore = JSON.stringify(objScore)

            localStorage.setItem('@score',parseObjScore)
      
    }
    
    const checkGameOverOrWins = useCallback((isCollision, isStarting, nicknameValue, scoreValue, isWinner)=>{
        if (isCollision && isStarting){
            setStarting(false)
            setMessage(`Game Over`)

            setScoreLocalStorage(nicknameValue, scoreValue)

        } else if (!isCollision && isStarting && isWinner ){

            setScoreLocalStorage(nicknameValue, scoreValue)
            
            console.log({entrei:true, isWinner})

        } else return ;
      
       
       
    },[])

    useEffect(()=>{
        checkGameOverOrWins(collision, starting, nickname, score, winner)
    },[checkGameOverOrWins,collision, starting, nickname, score, winner])


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
                <Laps>  Laps: {`${laps}/4`} </Laps>
                <Score> Score: {score}</Score>
            </Header>
            

            <Mensagem >{!starting && message }</Mensagem>

           {!starting && (
               <Menu>
                    <Link to={'/'}>Restart</Link>
                    <Link to={'/score-boarding'}>Score Record</Link>
               </Menu>
               
            )}
         
           
            

            <Rocha rockPosition={rockPosition}/>
            <Carro position={carPosition} />
        </Pista>
           
           
        </Container>
      
      
       </>
    )
}
