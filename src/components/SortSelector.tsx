import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { useGameQueryStore } from "../store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  // const { error } = useGame(gameQuery);

  // if (error) return null;

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];

  const getSortOrderLabel = (sortOrder?: string) => {
    const order = sortOrders.find((order) => order.value === sortOrder);
    return order?.label || "Relevance";
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronRight />}>
        Order by: {getSortOrderLabel(sortOrder)}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
