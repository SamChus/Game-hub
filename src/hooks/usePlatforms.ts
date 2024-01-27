import useData, { fetchResponse } from "./useData";
import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
