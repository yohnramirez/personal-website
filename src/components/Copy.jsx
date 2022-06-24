import React from 'react'
import { Text } from '@chakra-ui/react'

const Copy = ({value, sm, md, lg}) => {
  return (
    <Text 
        fontSize={[`${sm}`,`${md}`,`${lg}`]}
        mx={[2, 0, 0]} 
        my={[2, 0, 10]} 
        fontWeight='light' 
        lineHeight={2}>
            {value}    
    </Text>
  )
}

export default Copy