import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
  id: number,
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number
}

interface fetchGamesResponse { 
  count: number;
  results: Game[];
}

const useGame = () => {
  //   const controller = new AbortController();

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get<fetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // return () => controller.abort();
  }, []);

  

  return { games, error };
};

export default useGame;
