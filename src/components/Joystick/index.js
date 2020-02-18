import React from 'react';
import { MdArrowBack, MdArrowForward, MdArrowUpward } from 'react-icons/md';
import { CenterButton, Container, LeftButton, RightButton } from './styled';

export default function Joystick({ position }) {
  return (
    <Container>
      <LeftButton
        onClick={() => {
          position(50);
        }}
      >
        <MdArrowBack size={50} />
      </LeftButton>
      <CenterButton
        onClick={() => {
          position(300);
        }}
      >
        <MdArrowUpward size={50} />
      </CenterButton>
      <RightButton
        onClick={() => {
          position(500);
        }}
      >
        <MdArrowForward size={50} />
      </RightButton>
    </Container>
  );
}
