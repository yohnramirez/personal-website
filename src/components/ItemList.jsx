import React from 'react'
import { ListItem, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const ItemList = ({text, path}) => {
  return (
    <ListItem>
        <Link 
          as={ReachLink}
          to={path}
          letterSpacing={[0,0.5,1]}
          alignContent='center'
          _hover={
                {
                    textDecoration: 'none',
                    color: 'main.purple',
                    transition: '0.2s'
                }}>
            {text}
        </Link>                
    </ListItem>
  )
}

export default ItemList