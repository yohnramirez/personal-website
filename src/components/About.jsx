import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import Copy from './Copy'
import Title from './Title'

const About = () => {
  return (
    <Box my={[8,10,18]} mx={[1,2,4]} bgColor='main.bgBlue'>

      <Box paddingX={[0,3,10]} paddingY={[0,3,10]}>

        <Title tag='h1' value="👋 Hi, I'm Sebastián." />

        <Copy 
          sm='lg' md='xl' lg='2xl'
          value="I'm a web developer and and systems engineering student from Colombia. In my spare time I enjoy play soccer, gaming and building my own projects. My preferred tools are Javascript, React JS and Express JS."
        />

        <Text 
          fontSize={['lg','xl','2xl']} 
          fontWeight='light' 
          lineHeight={2}
          mt={5}>
            I'm on 
            <Link 
              href='https://github.com/yohnramirez' 
              color='main.purple' 
              isExternal> Github</Link> and 
            <Link 
              href='https://www.linkedin.com/in/sebastianrs/' 
              color='main.purple' 
              isExternal> Linkedln</Link>.
        </Text>
      </Box>
    </Box>
  )
}

export default About