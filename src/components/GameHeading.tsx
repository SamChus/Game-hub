import { Heading } from "@chakra-ui/react";
import React from "react";
import { QueryObject } from "../App";
import useGame from "../hooks/useGames";

interface Props {
  gameQuery: QueryObject;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { error } = useGame(gameQuery);

  if (error) return null

  const heading = `${gameQuery.platform?.name || "" } ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
