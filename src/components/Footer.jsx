import React from 'react'
import { Box, Text, Link, Flex } from '@chakra-ui/react'
import Copy from './Copy'

const Footer = () => {
  return (
    <Box 
        paddingX={[0,3,5]} 
        paddingY={[0,3,5]} 
        _before={{
            content: "''",
            maxWidth: 'auto',
            width: '100%',
            height: '6px', 
            display: 'block',
            marginTop: '10px', 
            borderRadius: '1000px',
            backgroundColor: 'main.softGray',
        }}>

            <Flex align='center' justify='space-between'>
                <Copy sm='sm' md='md' lg='lg' value="© 2022 Sebastián Ramírez ."/>

                <Text
                    fontSize={['sm','md','lg']} 
                    mx={[2, 0, 0]} 
                    my={[2, 0, 10]}
                    fontWeight='light' 
                    lineHeight={2}
                    mt={5}>
                        Build with 
                    <Link 
                    href='https://reactjs.org/' 
                    color='main.purple' 
                    isExternal> React.</Link>
                </Text>
            </Flex>
    </Box>
  )
}

export default Footer