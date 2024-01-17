import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'

interface Platform {
    id: number,
    name: string,
    slug: string,
}

const PlatformSelector = () => {
    const {data} = usePlatform()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight/>}>
            Platform
        </MenuButton>
        <MenuList>
            {data?.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector