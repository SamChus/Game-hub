import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number,
    name: string
}

interface fetchGenresResponse{
    count: number,
    results: Genre[]
}

const useGenre = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [genres, setGenres] = useState<Genre[]>([]);
   const [error, setError] = useState(null);

   useEffect(() => {
     const controller = new AbortController();
     setIsLoading(true);
     apiClient
       .get<fetchGenresResponse>("/genres", { signal: controller.signal })
       .then((res) => {
         setIsLoading(false);
         setGenres(res.data.results);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;
         setError(err.message);
         setIsLoading(false);
       });

     return () => controller.abort();
   }, []);

   return { genres, error, isLoading };
}

export default useGenre
