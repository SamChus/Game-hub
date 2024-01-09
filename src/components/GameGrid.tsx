import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={5}
        spacing={3}
      >
        {isLoading && Skeleton.map((i) => <GameCardSkeleton key={i}/>)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
