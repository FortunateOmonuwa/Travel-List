import { useState } from "react";

/* eslint-disable react/prop-types */
const Item = ({ quantity, item, packed }) => {
  const [packedItem, togglePackedItem] = useState(packed);

  const togglePacked = () => {
    togglePackedItem((prev) => !prev);
  };
  return (
    <li>
      <span
        style={
          packedItem ? { textDecoration: "line-through", opacity: 0.5 } : {}
        }
      >
        {quantity} {item}
      </span>
      <button onClick={togglePacked}>❌ </button>
    </li>
  );
};

export default Item;
