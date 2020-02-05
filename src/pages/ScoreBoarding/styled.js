import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StoryContainer = styled.div`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }
`;

export const Score = styled.ul`
  text-align: center;
  display: block;
  padding: 0.5rem;
  color: #000;
  list-style: none;

  li {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;

  :hover {
    background: #6931ca;
  }
`;
