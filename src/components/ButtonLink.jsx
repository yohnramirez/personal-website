import React from 'react'
import { useState } from 'react'
import { Link, Button, Flex } from '@chakra-ui/react'

const ButtonLink = ({value, link, icon, color, bg}) => {

  // const [buttonDisabled, setButtonDisabled] = useState("")

  // const handleButton = () =>{
  //   if( link === ""){
  //     buttonDisabled
  //   }
  // }

  

  

  return (
    <Flex align='center' direction={['column','row','row']}  _hover={
        {
            transform: 'scale(1.2)',
            transition: '.5s ease'
        }}>
        <Link 
          marginLeft={[2,0,0]}
          href={link} 
          _hover={{textDecoration: 'none'}} 
          isExternal>

            <Button 
              leftIcon={icon} 
              bgColor={bg} 
              color={color} 
              isDisabled={link === "" && true}>
                {value}
            </Button>
        </Link>
    </Flex>
  )
}

export default ButtonLink