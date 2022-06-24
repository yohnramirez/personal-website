import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({tag, value}) => {
  return (
    <Heading 
        as={tag} 
        size={['lg','xl','2xl']} 
        fontWeight='semibold' 
        marginBottom={[1,3,10]}
        marginLeft={[2,0,0]}
        >
            {value}
    </Heading>
  )
}

export default Title