import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { QueryObject } from "../App";

interface Props {
  gameQuery: QueryObject;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;
  return (
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
      {isLoading && Skeleton.map((i) => <GameCardSkeleton key={i} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
