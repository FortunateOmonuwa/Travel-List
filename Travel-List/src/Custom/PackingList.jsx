/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import InitialItems from "./Data/Data";
import Item from "./Item";

const List = ({ items, handleDelete, handleChecked, clearList }) => {
  const [newitems, setItems] = useState([]);
  useEffect(() => {
    setItems(items);
  }, [items]);

  const [sortBy, setSortBy] = useState(items);

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.item.localeCompare(b.item));
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => {
      if (a.packed === b.packed) {
        return 0;
      }
      return a.packed ? 1 : -1;
    });
  } else if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  } else {
    sortedItems = items;
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
          <option value="quantity">Sort by quantity</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
};

export default List;
