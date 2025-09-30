export default function GroceryItem({ item, toggleChecked, deleteItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.checked} onChange={toggleChecked} />
      <span style={{ textDecoration: item.checked ? "line-through" : "none" }}>
        {item.name}
      </span>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
}
