import React from 'react';

import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost';

const USER_QUERY = gql`
    query {
        users{
            _id,
            name,
            score
        }
    }

`

export default function Teste(){

        const {loading, error, data} = useQuery(USER_QUERY)
    
    return(
       <div>

           {loading && <p>loading ...</p>}
            {error && <p>Houve um erro ao trazer os dados</p>}

            {data && data.users.map(user=>(
                <ul key={user._id}>
                    <li>
                        {user.name} : {user.score}
                    </li>
                </ul>
            ))}
          
       </div>
    )

}


