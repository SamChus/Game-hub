import { Heading } from "@chakra-ui/react";
import React from "react";
import { QueryObject } from "../App";
import usePlatform from "../hooks/usePlatforms";
import useGenre from "../hooks/useGenres";

interface Props {
  gameQuery: QueryObject;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: platforms } = usePlatform();
    const platform = platforms.results.find((p) => p.id === gameQuery.platformId)


    const { data:genres } = useGenre();
    const genre = genres.results.find((g)=>g.id === gameQuery.genreId)




  const heading = `${platform?.name || "" } ${genre?.name || ""} Games`
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
