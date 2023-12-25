import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import ColoeModeSwitch from './ColoeModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={logo}  boxSize={20}/>
        <ColoeModeSwitch />
    </HStack>
  )
}

export default NavBar