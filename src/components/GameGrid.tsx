import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { List, ListItem } from '@chakra-ui/react'


interface Game {
    id: number,
    name: string,
}

interface fetchGamesResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState(null)

    useEffect(() =>{
        apiClient.get<fetchGamesResponse>('/xgames')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    }, [])
  return (
    <div>
        {error && <div>{error}</div>}
       <List>
            {games.map(game => 
                <ListItem key={game.id}>
                    {game.name}
                </ListItem>
            )}
        </List> 
    </div>
  )
}

export default GameGrid