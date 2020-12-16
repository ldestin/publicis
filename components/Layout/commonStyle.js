export const commonStyles = `
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

  button.MuiButtonBase-root  {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #1E5BF6;
    cursor: pointer;
  }

  .button.MuiButtonBase-root:hover,
  .button.MuiButtonBase-root:focus {
    background: #083CBF;
  }

  .button.MuiButtonBase-root:active {
    background: #5885F9;
  }

  .button.MuiButtonBase-root.MuiButton-contained {
    background: #1E5BF6;
    color: white;
  }

  .button.MuiButtonBase-root.MuiButton-contained:hover,
  .button.MuiButtonBase-root.MuiButton-contained:focus {
    background: #083CBF;
  }

  .button.MuiButtonBase-root.MuiButton-contained:active {
    background: #5885F9;
  }
`;