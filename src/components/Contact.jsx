import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import Title from './Title'

const Contact = () => {
  return (
    <Box my={[8,10,18]} mx={[1,2,4]} h='32vh'>
        <Title tag='h2' value="Contact me"/>

        <Text 
          fontSize={['lg','xl','2xl']} 
          marginLeft={[2,0,0]}
          fontWeight='light' 
          lineHeight={2}
          mt={5}>
            If you’d like to chat about a project or just have question, please send me a message on 
          
            <Link 
              href='https://www.linkedin.com/in/sebastianrs/' 
              color='main.purple' 
              isExternal> Linkedln</Link>.
        </Text>        
    </Box>
  )
}

export default Contact