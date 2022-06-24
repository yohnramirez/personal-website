import React from 'react'
import { Box, Heading, UnorderedList, Wrap, WrapItem, Link, Flex, Avatar } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import ItemList from './ItemList'
import '../index.css'

const Navbar = () => {
  return (
    <Flex justify='center' align='center' gap={5}>
        <Wrap>
            <WrapItem paddingX={[2,3,4]}>
                <Link as={ReachLink} to='/'>
                    <Avatar
                        size={['md','xl','xl']} 
                        name='Sebastian Ramirez' 
                        src='/images/Sebastian.jpg' />
                </Link>
            </WrapItem>
        </Wrap>
        
        <Box width='auto'>
            <Flex direction='column'>
                <Box mx={[3,4,5]}>
                    <Link as={ReachLink} to='/' _hover={{textDecoration: 'none'}}>
                        <Heading className="title" id='title'
                            size={['sm', 'md', 'lg']} 
                            color='main.black' 
                            my={3} 
                            letterSpacing={1}
                            _after={
                                {content: '""', 
                                height: '6px', 
                                display: 'block', 
                                width: '100%', 
                                backgroundColor: 'main.purple', 
                                borderRadius: '1000px', 
                                maxWidth: '60px', 
                                marginTop: '10px'}}>
                                SEBASTIAN RAMIREZ
                        </Heading>
                    </Link>
                </Box>

                <UnorderedList 
                    color='main.gray' 
                    fontWeight='bold' 
                    listStyleType='none' 
                    fontSize={['sm','md','lg']} my={[2,4,5]}>

                    <Flex gap={[5,8,10]} wrap='wrap'>
                        <ItemList text='ABOUT' path='/'/>
                        <ItemList text='PROJECTS' path='/projects'/>
                        <ItemList text='CONTACT' path='/contact'/>
                    </Flex>
                </UnorderedList>
            </Flex>
        </Box>
    </Flex>
  )
}

export default Navbar