export const resetStyles = `
  /* ACTIVE DIRECTORY OVERRIDES */
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

  #__next {
    display: contents;
  }

  .itemLevel {
    display: none !important;
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
  
  .intro {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
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

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .buttons.reverse {
    flex-direction: row-reverse;
  }
  /* END API OVERRIDES */
  
  .materializedInput {
    width: 100%;
    margin: 32px 0 !important;
  }

  .materializedButton {
    background: #1E5BF6;
  }

  .materializedButton:hover,
  .materializedButton:focus {
    background: #083CBF;
  }

  .materializedButton:active {
    background: #5885F9;
  }
`;