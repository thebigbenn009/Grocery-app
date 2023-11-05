import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };
    setItems([...items, newItem]);
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
