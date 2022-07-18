import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
img{
  width: 18rem;

}
.wrapper{
  position: relative;
  .login-form{
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 2px 2px 4px #888;
    padding: 3rem 3rem;
    border-radius: 0.25rem;

    h1{
      text-align: center;
      margin-bottom: 2rem;
    }
    strong{
      color: red;
      position: absolute;
      width: 77%;
      text-align: center;
      margin-top: -20px;;
    }

    }
    
    label{
      font-size: small;
    }

    .labels{
        display: flex;
        justify-content: space-between;
        padding-right: 8px;
      }

    .login-form-input{
      font-size: 2rem;
      position: relative;

      span{
        position:absolute;
        bottom: 5px;
        right: 10px;
        top: 8px;
        color: #777;
        height: 30px;
      }
    }

    input{
      border:solid 2px #888;
      width: 20rem;
      padding: 0 0.5rem;
      margin-bottom: 2rem;
      transition: .2s;
      &:focus{
        border: solid 2px #333;
      }
    }
    

    .btn{
      display: flex;
      justify-content: center;
      
      button{
        width: 60%;
        height: 2.3rem;
        background: transparent;
        border: solid 2px #888;
        color:#888;
        border-radius: 0.25rem;
        transition: .2s;
        font-weight: 700;
        text-transform: uppercase;
        &:hover{
          border: solid 2px #333;
          color: #333;
        }
      }
    }

    footer{
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      margin-top: 8px;
      font-size: small;

      a{
        color: #555;
        transition: .2s;
        font-weight: 700;
        &:hover{
          color: #212121;
        }
      }
    }
  }
`;

export {Container}