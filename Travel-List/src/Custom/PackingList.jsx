/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import InitialItems from "./Data/Data";
import Item from "./Item";

const List = ({ items, handleDelete, handleChecked }) => {
  const [newitems, setItems] = useState([]);
  useEffect(() => {
    setItems(items);
  }, [items]);

  const listOfItems = newitems.map((item) => {
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
    </div>
  );
};

export default List;
