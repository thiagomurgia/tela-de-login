import {createGlobalStyle} from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background: #fcfcfc;

  input{
      outline: none;
      height: 2.3rem;
      border-radius: 0.25rem;
    }
}

html{
  button{
    cursor: pointer;
    height: 2.3rem;
      border-radius: 0.25rem;
  }
}
`;