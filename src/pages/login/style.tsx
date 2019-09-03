import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(to bottom, #cfdeee 0%, #8da9cf 100%);
`;

export const ContentWrapper = styled.div`
  width: 400px;
  height: 300px;
  background: #6699cc;
  margin: auto;
  display: flex;
  flex-direction: column;

  .login-logo {
    flex-grow: 2;
    display: flex;

    span {
      margin: auto;
      font-size: 40px;
      color: white;
    }
  }

  .login-top {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;

    .login-input {
      flex: 1;
    }
  }

  .login-bottom {
    flex-grow: 2;
    padding: 0px 30px;

    button {
      background: #336699;
      border: none;
    }
    button:hover {
      background: rgba(33, 66, 99, 0.8);
    }
  }
`;
