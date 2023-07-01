import React, { useState } from 'react';
import ShoppingListItem from './components/ShoppingListItem';
import './styles/app4.css';

const App4 = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItems = [...items, event.target.item.value];
    setItems(newItems);
    event.target.reset();
  };
  const handleRemove = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  };

  return (
    <>
      <h1>Project 4 - Shopping List!</h1>
      <div className="list-container">
        <h2>Items to Buy</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="item" placeholder="Add a New Item" required></input>
          <button type="submit">ADD</button>
        </form>
        <div className="list">
          {items.map((item, index) => (
            <div key={`list-item-${index}`} className="list-item">
              <ShoppingListItem item={item} />
              <button type="button" onClick={() => handleRemove(item)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App4;
