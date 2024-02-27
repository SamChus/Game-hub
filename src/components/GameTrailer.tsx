import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  //    console.log(.data);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={first?.data[480]}
      poster={first?.preview}
      controls
      width={"100%"}
    />
  ) : null;
};

export default GameTrailer;
