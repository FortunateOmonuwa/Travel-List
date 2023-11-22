/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import InitialItems from "./Data/Data";
import Item from "./Item";

const List = ({ items, handleDelete, handleChecked }) => {
  const [newitems, setItems] = useState([]);
  useEffect(() => {
    setItems(items);
  }, [items]);

  const [sortBy, setSortBy] = useState("description");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.item.localeCompare(b.item));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.packed.localeCompare(b.packed));
  }

  const listOfItems = sortedItems.map((item) => {
    return (
      <Item
        key={item.id}
        {...item}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
      />
    );
  });

  return (
    <div className="list">
      <ul className="list">{listOfItems}</ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by description</option>

          <option value="packed"> Sort by packed</option>
        </select>
      </div>
    </div>
  );
};

export default List;
