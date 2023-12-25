import { List, ListItem } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {

    const {games, error} = useGame()
  return (
    <div>
      {error && <div>{error}</div>}
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default GameGrid;
