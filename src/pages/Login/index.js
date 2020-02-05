import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContainer,
  InputBlock,
} from './styled';

const ENTER_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`;

export default function Login({ history }) {
  const [nickname, setNickname] = useState('');

  const [createUser] = useMutation(ENTER_USER);

  async function handleSubmit(event) {
    event.preventDefault();

    createUser({
      variables: {
        name: nickname,
      },
    });

    localStorage.setItem('@nickname', nickname);

    history.push(`/racing`);
  }

  return (
    <Container>
      <FormContainer>
        <strong>Racing Car</strong>
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={nickname}
              onChange={e => {
                setNickname(e.target.value);
              }}
              maxLength="17"
              required
            />
          </InputBlock>
          <FormButton>Start Game</FormButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
