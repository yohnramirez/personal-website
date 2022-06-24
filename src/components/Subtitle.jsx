import React from 'react'
import { Heading } from '@chakra-ui/react'

const Subtitle = ({tag, value}) => {
  return (
    <Heading 
        as={tag} 
        size={['md','lg','lg']} 
        fontWeight='semibold' 
        marginBottom={[1,3,10]}
        marginLeft={[2,0,0]}
        >
            {value}
    </Heading>
  )
}

export default Subtitle