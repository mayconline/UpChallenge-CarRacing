import React, { useState, useEffect } from 'react';

import {Container, StoryContainer, Score, Button} from './styled';

export default function ScoreBoarding({history}){
   
    const [scoreRanking, setScoreRaking] = useState([])
   
    useEffect(()=>{
        const response = localStorage.getItem('@score')
            const parseJsonResponse = JSON.parse(response)
       
        setScoreRaking([parseJsonResponse, ...scoreRanking])
    },[])

 
    return(
        <Container>
            <StoryContainer>
                <strong>Score Boarding</strong>
                <Score>
                    {scoreRanking && 
                       scoreRanking.map(score => (
                            
                              <li key={score._id}>
                              {score.nicknameValue } : {score.scoreValue}
                              </li>

                       )) 
            
                    }
                </Score>
                <Button onClick={()=>{history.push(`/`)}}>Voltar</Button>
            </StoryContainer>
        </Container>
    )

}