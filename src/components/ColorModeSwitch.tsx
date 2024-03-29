import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColoeModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
        <Text whiteSpace={"nowrap"}>
            Dark mode
        </Text>
    </HStack>
  )
}

export default ColoeModeSwitch