import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

const colors = {
  main: {
    'blue': '#4A63E7',
    'red': '#FF5959',
    'white': '#FFFFFF',
    'black': '#191A1D',
    'gray': '#5E5E5E',
    'purple': '#7267CB',
    'bgBlue': '#F1F8FA',
    'softGray': '#DDDDDD'
  }
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS='true' theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
