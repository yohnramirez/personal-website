import React from 'react'

// Chakra components
import { Flex, Link, Box, Image } from '@chakra-ui/react'

// Icons components
import { VscGithub, VscGlobe } from "react-icons/vsc";

// Local componentes
import Subtitle from './Subtitle'
import Copy from './Copy'
import ButtonLink from './ButtonLink'
import projects from '../projects'

const CardProject = () => {

    return (
        <>
            {projects.map(item => {

                return(
                    <Flex 
                        paddingBottom={[10,10,20]}
                        key={item.title} align={['left','center','center']} 
                        justify='space-between' 
                        direction={['column', 'row', 'row']}>
                        <Link 
                            href={item.web}
                            w={['350px', '2xl', '3xl']}
                            marginBottom={[5,0,0]}
                            boxShadow='2xl' 
                            _hover={{transform: 'scale(1.1)', transition: '0.5s ease'}}
                            isExternal>
                            <Image src={item.preview} alt={item.title} />
                        </Link>
                        <Box w={['355px']}>
                            <Subtitle tag='h3' value={item.title}/>
                            <Copy sm='md' md='lg' lg='xl' value={item.description}/>
                            <Flex gap={['1','3','5']}>
                                <ButtonLink 
                                    bg='main.black'
                                    color='main.white'
                                    icon={<VscGithub/>} 
                                    link={item.repository} 
                                    value='Github'/>
                                <ButtonLink 
                                    bg='main.purple'
                                    color='main.white'
                                    icon={<VscGlobe/>} 
                                    link={item.web} 
                                    value='Visit'/>
                            </Flex>
                        </Box>
                    </Flex>
                )
            })}
        </>
    )
}

export default CardProject