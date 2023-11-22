import { useEffect, useState } from "react";
import Logo from "./Custom/Logo";
import Form from "./Custom/Form";
import List from "./Custom/PackingList";
import Details from "./Custom/Details";
import Item from "./Custom/Item";

function App() {
  const [items, setItems] = useState([]);
  //length of items

  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };
  function clearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <List
        items={items}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        clearList={clearList}
      />
      <Details items={items} />
    </div>
  );
}

export default App;
