import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useEffect } from 'react';
import { Button, Container, Score, StoryContainer } from './styled';

const USER_QUERY = gql`
  query {
    users {
      _id
      name
      score
    }
  }
`;

export default function ScoreBoarding({ history }) {
  const { loading, error, data, refetch } = useQuery(USER_QUERY);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Container>
      <StoryContainer>
        <strong>Score Boarding</strong>
        <Score>
          {loading && <p>loading ...</p>}
          {error && <p>There was an error bringing the data</p>}

          {data &&
            data.users.map(user => (
              <li key={user._id}>
                {user.name} : {user.score}
              </li>
            ))}
        </Score>
        <Button
          onClick={() => {
            history.push(`/`);
          }}
        >
          Come Back
        </Button>
      </StoryContainer>
    </Container>
  );
}
