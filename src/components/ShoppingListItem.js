import React, { useState } from 'react';

const ShoppingListItem = ({ item }) => {
  const [isPurchased, setIsPurchased] = useState(false);

  return (
    <>
      <p id={isPurchased ? 'purchased' : ''} onClick={() => setIsPurchased(!isPurchased)}>
        {item}
      </p>
    </>
  );
};

export default ShoppingListItem;
