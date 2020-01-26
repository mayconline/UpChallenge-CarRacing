import React from 'react';

import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost';

import {Container, StoryContainer, Score, Button} from './styled';

const USER_QUERY = gql`
    query {
        users{
            _id,
            name,
            score
        }
    }

`

export default function ScoreBoarding({history}){
   
  
    const {loading, error, data} = useQuery(USER_QUERY)

 
    return(
        <Container>
            <StoryContainer>
                <strong>Score Boarding</strong>
                <Score>        
                    {loading && <p>loading ...</p>}
                    {error && <p>Houve um erro ao trazer os dados</p>}

                        {data && data.users.map(user => (
                                        
                                        <li key={user._id}>
                                        {user.name } : {user.score}
                                        </li>

                                )) 
                        
                         }
                </Score>
                <Button onClick={()=>{history.push(`/`)}}>Voltar</Button>
            </StoryContainer>
        </Container>
    )

}