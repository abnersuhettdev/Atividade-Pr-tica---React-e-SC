import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components';
import { light,dark } from './styles/themes';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
    <GlobalStyles/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
