import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { QueryObject } from "../App";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useIsFetching } from "@tanstack/react-query";

interface Props {
  gameQuery: QueryObject;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  // const query  = new QueryClient()
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const isFetching = useIsFetching();

  if (error) return <Text>{error.message}</Text>;
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
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
