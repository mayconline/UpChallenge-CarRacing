import React , {useState, useEffect, useCallback} from 'react';
import {useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost';

import {Pista, Carro, Mensagem, Menu, Container, Header, Nickname, Score, Laps, Rocha} from './styled';

import {Link} from 'react-router-dom';

const UPDATE_SCORE_USER = gql`

    mutation updateScoreUserByName($name:String!, $score:Int!){
        updateScoreUserByName(name:$name, score:$score){
            name
            score
        }
    }

`

export default function Racing(){

    const [updateScoreUserByName] = useMutation(UPDATE_SCORE_USER)

    const [carPosition, setCarPosition] = useState(300);
    const [starting, setStarting] = useState(false);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [rockPosition, setRockPosition] = useState(50);
    const [rockOpacity, setRockOpacity] = useState(0);
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
                    setMessage('Congrulation Wins')
                    setStarting(false)
                    setWinner(true)         
            } 
                
            
                
      },[])


      useEffect(()=>{
        const intervalLaps = setInterval(()=>{
            verifyNumberLaps(laps, starting)
        }, 10000)

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

   
    
    const generatePositionRandomObstacle = useCallback(()=>{
        if (starting) 
              return Math.floor(Math.random()*(500-50)+50);    
                else 
                    return rockPosition;             
      },[starting, rockPosition])

    const generateOpacityRandomObstacle = useCallback(()=>{
        if (starting) 
              return Math.floor(Math.random()*(1-0+1))+0; 
                else 
                    return rockOpacity; 
    },[starting, rockOpacity])
      
   
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setRockPosition(generatePositionRandomObstacle())
            setRockOpacity(generateOpacityRandomObstacle())
           
        }, 2000)

     return()=>{
            clearInterval(intervalo)
        }
    },[generatePositionRandomObstacle, generateOpacityRandomObstacle])


    const checkCollision = useCallback((rockPosition, carPosition, isRockOpacity)=>{
              
        if(carPosition===300 && rockPosition<310 && rockPosition>=290 && isRockOpacity===1) {
            setCollision(true)
        }else 
            if (carPosition===50 && rockPosition<80 && rockPosition>=50 && isRockOpacity===1){
                setCollision(true)
            }else 
                if (carPosition===500 && rockPosition<=500 && rockPosition>=480 && isRockOpacity===1){
                setCollision(true)
                }
    },[])

    useEffect(()=>{    
        
        checkCollision(rockPosition, carPosition, rockOpacity)
      
    },[checkCollision, carPosition, rockPosition, rockOpacity])


    function setScoreMongoDB(nicknameValue, scoreValue){
      
          updateScoreUserByName({
              variables:{
                  name:nicknameValue,
                  score:scoreValue
              }
          })
      
    }
    
    const checkGameOverOrWins = useCallback((isCollision, isStarting, nicknameValue, scoreValue, isWinner)=>{
        if (isCollision && isStarting){
            setStarting(false)
            setMessage(`Game Over`)

            setScoreMongoDB(nicknameValue, scoreValue)

        } else if (!isCollision && isWinner ){
           
            setScoreMongoDB(nicknameValue, scoreValue)
            
            

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
         
            <Rocha rockPosition={rockPosition} rockOpacity={rockOpacity}/>
            <Carro position={carPosition} />
        </Pista>
           
           
        </Container>
      
      
       </>
    )
}
