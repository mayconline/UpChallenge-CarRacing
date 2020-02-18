import styled from 'styled-components';

export const Container = styled.aside`
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 1rem;
  @media (max-width: 768px) {
    display: grid;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: #7d40e7;
  border-radius: 2px;
  padding: 40px 90px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;

  :hover {
    background: #6931ca;
  }
`;

export const PauseButton = styled(Button)`
  grid-column: 1/4;
`;
