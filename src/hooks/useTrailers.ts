import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";




const useTrailers = (gameId: number) => {
    const apiCliant = new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
      queryKey: ["trailers", gameId],
      queryFn: apiCliant.getAll
    });          
} 

export default useTrailers;