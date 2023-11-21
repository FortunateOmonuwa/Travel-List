import { useState } from "react";

/* eslint-disable react/prop-types */
const Item = ({ quantity, item, packed, id, handleDelete, handleChecked }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          handleChecked(id);
        }}
      />
      <span
        style={packed ? { textDecoration: "line-through", opacity: 0.5 } : {}}
      >
        {quantity} {item}
      </span>
      <button onClick={() => handleDelete(id)}>❌ </button>
    </li>
  );
};

export default Item;
