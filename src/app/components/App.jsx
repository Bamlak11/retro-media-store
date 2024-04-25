"use client";
import React, { useState } from "react";
import MediaList from "./MediaList";

const App = () => {
  // create array for media items
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'VHS', title: 'Back to the Future' },
    { id: 2, type: 'DVD', title: 'The Matrix'},
    { id: 3, type: 'CD', title: 'Thriller - Michael Jackson'},
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) =>{
    setCart([...cart, item]);
    console.log(`Added ${item.title} to the cart.`)
  }

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    console.log(`Removed ${item.title} from the cart.`);
  };

  const toggleFavorite = (itemId) => {
    setMediaItems(mediaItems.map(item => {
      if (item.id === itemId) {
        return { ...item, favorite: !item.favorite };
      }
      return item;
    }));
  };
  

  return (
    <div className="flex justify-between flex-col p-10">
      {/* gets medialist component and mediaitems prop and displays the content  */}
      <MediaList 
      mediaItems={mediaItems} 
      addToCart={addToCart} 
      removeFromCart={removeFromCart}
      toggleFavorite={toggleFavorite}
      />

    </div>
  );
};

export default App;
