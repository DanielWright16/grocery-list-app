import { useState } from "react";
import GroceryItem from "../components/GroceryItem";
import GroceryForm from "../components/GroceryForm";

export default function GroceryListPage() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    setItems([...items, { name, checked: false }]);
  };

  const toggleChecked = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryForm addItem={addItem} />
      <ul>
        {items.map((item, i) => (
          <GroceryItem
            key={i}
            item={item}
            toggleChecked={() => toggleChecked(i)}
            deleteItem={() => deleteItem(i)}
          />
        ))}
      </ul>
    </div>
  );
}
