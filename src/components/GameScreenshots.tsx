import React from 'react'
import useScreenshots from '../hooks/useScreenshots'
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react'

interface Props {
    gameId: number
}

const GameScreenshots = ({gameId}:Props) => {
    const {data, isLoading, error} = useScreenshots(gameId)
    if (!data?.results) return null
    if(error) throw error

    
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={2}
      my={5}
    >
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id}/>
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots