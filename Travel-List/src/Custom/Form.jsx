import { useState } from "react";

const Form = ({ onAddItem }) => {
  const selectOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  const [input, setInput] = useState({
    item: "",
    packed: false,
    quantity: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.item !== "") {
      const { item, packed, quantity } = input;
      const newItem = {
        item,
        quantity,
        packed,
        id: Date.now(),
      };
      console.log(newItem);

      onAddItem(newItem);

      setInput({ item: "", quantity: 1 });
    }
  };

  const handleChange = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form className="add-form" onSubmit={() => handleSubmit}>
      <h3>What do you need for your trip </h3>
      <select
        value={input.quantity}
        name="quantity"
        id=""
        onChange={handleChange}
      >
        {selectOptions.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={input.item}
        onChange={handleChange}
        name="item"
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default Form;
