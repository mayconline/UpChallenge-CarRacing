import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to right top,
    #d16ba5,
    #cd5dad,
    #c551b7,
    #b847c4,
    #a541d2,
    #a254de,
    #9e65e9,
    #9b74f3,
    #b298f9,
    #cabafd,
    #e4ddff,
    #ffffff
  );
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.div`
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

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputBlock = styled.div`
  margin-top: 20px;

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`;

export const FormButton = styled.button.attrs({
  type: 'submit',
})`
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
