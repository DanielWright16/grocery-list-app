import { useState } from "react";

export default function GroceryForm({ addItem }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addItem(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add grocery item"
      />
      <button type="submit">Add</button>
    </form>
  );
}
