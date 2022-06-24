import React from 'react'
import { Box } from '@chakra-ui/react'
import Title from './Title'
import Copy from './Copy'
import CardProject from './CardProject'

const Projects = () => {
  return (
    <>
      <Box my={[8,10,18]} mx={[1,2,4]} paddingY={[0,3,10]}>
        <Title tag='h2' value='Projects' />
        <Copy 
          sm='lg' md='xl' lg='2xl'
          value="Some of my personal projects."
        />
      </Box>
      <Box>
        <CardProject/> 
      </Box>
    </>
  )
}

export default Projects