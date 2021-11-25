import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components"


const lightTheme = {
  textColor:"whitesmoke",
  backgroundColor:"black"
}

const darkTheme = {
  textColor:"black",
  backgroundColor:"whitesmoke"
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

