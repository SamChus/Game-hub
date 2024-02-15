import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';
import { useGameQueryStore } from '../store';





const PlatformSelector = () => {
    
    const {data, error,} = usePlatform()
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);


    if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight/>}>
            {data?.results.find((platform) => platform.id === selectedPlatformId )?.name || "Platform"}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform) => <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector