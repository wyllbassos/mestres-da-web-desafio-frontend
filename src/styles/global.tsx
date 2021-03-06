import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      border: 0px;
      font-weight: normal;
      font-size: 100%;
      list-style: none;
      line-height: 1;
      outline: 0px;
      background: none;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
  }

    body {
        background-color: #312e38;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4 ,h5 , h6, strong {
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
        font-family: 'Roboto Slab', serif;
        font-weight: 500;
    }

    div, label, span {
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
      font-family: 'Roboto Slab', serif;
    }

    button {
        cursor: pointer;
    }
`;
