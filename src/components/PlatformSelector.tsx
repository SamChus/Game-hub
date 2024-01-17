import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'

interface Platform {
    id: number,
    name: string,
    slug: string,
}

interface Props {
    onSelectedPlatform: (platform:Platform) => void,
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatform} :Props) => {
    const {data, error} = usePlatform()

    if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight/>}>
            {selectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList>
            {data?.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector