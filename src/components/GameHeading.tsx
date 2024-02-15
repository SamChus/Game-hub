import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatforms";
import { useGameQueryStore } from "../store";

const GameHeading = () => {
  
  const { data: platforms } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = platforms.results.find((p) => p.id === platformId);
  
  const { data: genres } = useGenre();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = genres.results.find((g) => g.id === genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
