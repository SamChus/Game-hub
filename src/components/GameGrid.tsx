import { Box, Button, List, ListItem, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { QueryObject } from "../App";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useIsFetching } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: QueryObject;
}



const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const fetchedGamesCount = data?.pages.reduce((total, page)=> total + page.results.length, 0) || 0


  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll dataLength={fetchedGamesCount} next={() =>fetchNextPage()} hasMore={!!hasNextPage} loader={<Spinner />}>
      <SimpleGrid columns={[2, 3, 4]} spacing={10}>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
        {isLoading
          ? Skeleton.map((i) => <GameCardSkeleton key={i} />)
          : null}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
