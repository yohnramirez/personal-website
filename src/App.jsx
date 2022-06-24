import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

const App = () => {
  return (
    <Box 
      paddingX={[2,10,20]} 
      paddingTop={[2,10,20]}
      paddingBottom={0} 
      bgColor='white'>
      <Flex>
        <Navbar/>
      </Flex>

      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      <Footer/>
    </Box>
  )
}

export default App