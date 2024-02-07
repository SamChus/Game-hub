import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'



interface Props {
    onSelectedPlatformId: (platform:number) => void,
    selectedPlatformId: number
}

const PlatformSelector = ({onSelectedPlatformId, selectedPlatformId} :Props) => {
    const {data, error,} = usePlatform()

    if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight/>}>
            {data?.results.find((platform) => platform.id === selectedPlatformId)?.name || "Platform"}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectedPlatformId(platform.id)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector