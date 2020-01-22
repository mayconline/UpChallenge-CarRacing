import React , {useState} from 'react';
import {Container, FormContainer, Form, InputBlock, FormButton} from './styled';

export default function Login({history}){
        
    const [nickname, setNickname] = useState('')

    function handleSubmit(event){
        event.preventDefault();

        localStorage.setItem('@nickname',nickname);
        
        history.push(`/racing`);
       
    }

    return(
        <Container>
            <FormContainer>
                <strong>Racing Car</strong>
                <Form onSubmit={handleSubmit}>
                    <InputBlock>
                        <label htmlFor='nickname'>Nickname</label>
                        <input 
                            type='text'
                            name='nickname' 
                            id='nickname' 
                            value={nickname}
                            onChange={(e)=>{setNickname(e.target.value)}}
                            required 
                        />
                    </InputBlock>
                    <FormButton>Start Game</FormButton>
                   
                </Form>
            </FormContainer>
        </Container>
    )
}