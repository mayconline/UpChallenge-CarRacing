import React from 'react';
import {
  MdArrowBack,
  MdArrowForward,
  MdArrowUpward,
  MdPause,
} from 'react-icons/md';
import { Button, Container, PauseButton } from './styled';

export default function Joystick({
  setPosition,
  starting,
  setStarting,
  setMessage,
}) {
  return (
    <Container>
      <Button
        onClick={() => {
          setPosition(position => (starting ? 50 : position));
        }}
      >
        <MdArrowBack size={50} />
      </Button>
      <Button
        onClick={() => {
          setPosition(position => (starting ? 300 : position));
        }}
      >
        <MdArrowUpward size={50} />
      </Button>
      <Button
        onClick={() => {
          setPosition(position => (starting ? 500 : position));
        }}
      >
        <MdArrowForward size={50} />
      </Button>
      <PauseButton
        onClick={() => {
          setMessage('Paused');
          setStarting(isStarting => !isStarting);
        }}
      >
        <MdPause size={50} />
      </PauseButton>
    </Container>
  );
}
