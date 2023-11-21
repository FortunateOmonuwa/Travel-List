import { useEffect, useState } from "react";
import Logo from "./Custom/Logo";
import Form from "./Custom/Form";
import List from "./Custom/PackingList";
import Details from "./Custom/Details";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <List items={items} />
      <Details />
    </div>
  );
}

export default App;
