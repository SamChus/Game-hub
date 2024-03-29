import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGame from "../hooks/useGames";
import { useGameQueryStore } from "../store";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";



const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGame();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const fetchedGamesCount = data?.pages.reduce((total, page)=> total + page.results.length, 0) || 0


  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        mt={3}
        px={2}
      >
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {isLoading ? Skeleton.map((i) => <GameCardSkeleton key={i} />) : null}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
