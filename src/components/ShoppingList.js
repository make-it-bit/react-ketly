import React, { useState } from 'react';
import '../styles/shopping-list.css';

const ShoppingList = ({ item }) => {
  const [isPurchased, setIsPurchased] = useState(false);

  return (
    <>
      <p id={isPurchased ? 'purchased' : ''} onClick={() => setIsPurchased(!isPurchased)}>
        {item}
      </p>
    </>
  );
};

export default ShoppingList;
