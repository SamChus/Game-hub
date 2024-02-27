import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";
import DefinitionText from "../components/DefinitionText";
import { platform } from "os";
import CriticScore from "../components/CriticScore";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const [showMore, setShowMore] = useState(false);
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
 
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const getShortText = () => {
    if (showMore) {
      return game.description_raw;
    }
    return game.description_raw.slice(0, 300).concat(" ....");
  };

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
     <GameAttribute  game={game}/>
     <GameTrailer gameId={game.id}/>
    </>
  );
};

export default GameDetailPage;
