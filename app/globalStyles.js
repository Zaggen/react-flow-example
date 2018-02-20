import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  li {
    list-style: none;
  }
  
  button, input {
    outline: none;
  }
  
  button:active {
    opacity: 0.7;
  }
`
