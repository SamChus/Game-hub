import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import CriticScore from './CriticScore';
import DefinitionText from './DefinitionText';
import Game from '../entities/Game';

interface Props{
  game: Game
}

const GameAttribute = ({game}:Props) => {
  return (
    <SimpleGrid columns={2} marginBottom={10}>
      <DefinitionText term="Platform">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionText>
      <DefinitionText term="Meta Score">
        <CriticScore score={game.metacritic} key={game.id} />
      </DefinitionText>
      <DefinitionText term="Meta Score">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionText>
      <DefinitionText term="Meta Score">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionText>
    </SimpleGrid>
  );
}

export default GameAttribute