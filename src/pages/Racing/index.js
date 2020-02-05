import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Container,
  Header,
  Laps,
  Menu,
  Message,
  Nickname,
  Road,
  Rock,
  Score,
} from './styled';

const UPDATE_SCORE_USER = gql`
  mutation updateScoreUserByName($name: String!, $score: Int!) {
    updateScoreUserByName(name: $name, score: $score) {
      name
      score
    }
  }
`;

export default function Racing() {
  const [updateScoreUserByName] = useMutation(UPDATE_SCORE_USER);

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

  useEffect(() => {
    setNickname(localStorage.getItem('@nickname'));
  }, []);

  useEffect(() => {
    setMessage('3 ...');

    setTimeout(() => {
      setMessage('2 ...');
    }, 1000);

    setTimeout(() => {
      setMessage('1 ...');
    }, 2000);

    setTimeout(() => {
      setMessage('GO !');
    }, 3000);

    setTimeout(() => {
      setStarting(true);
    }, 3300);
  }, []);

  const verifyNumberLaps = useCallback((numberLaps, isStarting) => {
    if (numberLaps < 4 && isStarting) {
      setLaps(numberLaps + 1);
    } else if (numberLaps === 4) {
      setMessage('Congrulation Wins');
      setStarting(false);
      setWinner(true);
    }
  }, []);

  useEffect(() => {
    const intervalLaps = setInterval(() => {
      verifyNumberLaps(laps, starting);
    }, 10000);

    return () => {
      clearInterval(intervalLaps);
    };
  }, [laps, verifyNumberLaps, starting]);

  const handlePosition = useCallback(
    event => {
      event.preventDefault();
      if (!starting && event.key === 'Escape') {
        return setStarting(isStarting => !isStarting);
      }
      if (starting) {
        switch (event.key) {
          case 'a':
            return setCarPosition(50);
          case 's':
            return setCarPosition(300);
          case 'd':
            return setCarPosition(500);
          case 'ArrowLeft':
            return setCarPosition(50);
          case 'ArrowRight':
            return setCarPosition(500);
          case 'Escape': {
            setMessage('Paused');
            return setStarting(isStarting => !isStarting);
          }
          default:
            return false;
        }
      }
      return false;
    },
    [starting]
  );

  useEffect(() => {
    window.addEventListener('keydown', handlePosition);

    return () => {
      window.removeEventListener('keydown', handlePosition);
    };
  }, [handlePosition]);

  const generatePositionRandomObstacle = useCallback(() => {
    if (starting) return Math.floor(Math.random() * (500 - 50) + 50);
    return rockPosition;
  }, [starting, rockPosition]);

  const generateOpacityRandomObstacle = useCallback(() => {
    if (starting) return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    return rockOpacity;
  }, [starting, rockOpacity]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setRockPosition(generatePositionRandomObstacle());
      setRockOpacity(generateOpacityRandomObstacle());
    }, 2000);

    return () => {
      clearInterval(intervalo);
    };
  }, [generatePositionRandomObstacle, generateOpacityRandomObstacle]);

  const checkCollision = useCallback(
    (rockPositionValue, carPositionValue, isRockOpacity) => {
      if (
        carPositionValue === 300 &&
        rockPositionValue < 310 &&
        rockPositionValue >= 290 &&
        isRockOpacity === 1
      ) {
        setCollision(true);
      } else if (
        carPositionValue === 50 &&
        rockPositionValue < 80 &&
        rockPositionValue >= 50 &&
        isRockOpacity === 1
      ) {
        setCollision(true);
      } else if (
        carPositionValue === 500 &&
        rockPositionValue <= 500 &&
        rockPositionValue >= 480 &&
        isRockOpacity === 1
      ) {
        setCollision(true);
      }
    },
    []
  );

  useEffect(() => {
    checkCollision(rockPosition, carPosition, rockOpacity);
  }, [checkCollision, carPosition, rockPosition, rockOpacity]);

  function setScoreMongoDB(nicknameValue, scoreValue) {
    updateScoreUserByName({
      variables: {
        name: nicknameValue,
        score: scoreValue,
      },
    });
  }

  const checkGameOverOrWins = useCallback(
    (isCollision, isStarting, nicknameValue, scoreValue, isWinner) => {
      if (isCollision && isStarting) {
        setStarting(false);
        setMessage(`Game Over`);

        setScoreMongoDB(nicknameValue, scoreValue);
      }
      if (!isCollision && isWinner) {
        setScoreMongoDB(nicknameValue, scoreValue);
      }
    },
    [] // eslint-disable-line
  );

  useEffect(() => {
    checkGameOverOrWins(collision, starting, nickname, score, winner);
  }, [checkGameOverOrWins, collision, starting, nickname, score, winner]);

  const incrementScore = useCallback(
    (isCollision, isStarting) => {
      if (isCollision) {
        setScore(scoreValue => scoreValue);
      } else if (!isCollision && isStarting)
        setScore(scoreValue => scoreValue + 1);
    },
    [rockPosition, carPosition] // eslint-disable-line
  );

  useEffect(() => {
    incrementScore(collision, starting);
  }, [incrementScore, collision, starting]);

  return (
    <>
      <Container>
        <Road starting={starting}>
          <Header>
            <Nickname>{nickname && nickname}</Nickname>
            <Laps> Laps: {`${laps}/4`} </Laps>
            <Score> Score: {score}</Score>
          </Header>

          <Message>{!starting && message}</Message>

          {!starting && (
            <Menu>
              <Link to="/">Restart</Link>
              <Link to="/score-boarding">Score Record</Link>
            </Menu>
          )}

          <Rock rockPosition={rockPosition} rockOpacity={rockOpacity} />
          <Car position={carPosition} />
        </Road>
      </Container>
    </>
  );
}
