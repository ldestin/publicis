export const resetStyles = `
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans', sans-serif;
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
  }

  .hidden,
  .helpLink,
  .changeClaims,
  #cancel {
    display: none !important;
  }

  #continue {
    margin: auto;
  }

  div {
    box-sizing: border-box;
  }

  a,
  button {
    color: unset;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    text-decoration: none;
  }
  input {
    background: none;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  #api {
    width: 420px;
  }

  form {
    margin-top: 64px;
  }

  .verificationSuccessText,
  .verificationErrorText,
  #emailVerificationControl_info_message,
  .pageLevel
  {
    position: relative;
    text-align: center;
    bottom: 32px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    outline: none;
  }

  .verifying-modal {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
    margin-top: 32px;
  }
`;