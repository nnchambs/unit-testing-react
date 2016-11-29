import React from 'react';

const GroceryList = ({ groceries, onClearGroceries }) => {
  return(

    <button className='clear-groceries' onClick={onClearGroceries}>Clear Groceries</button>
  )
}

export default GroceryList;
