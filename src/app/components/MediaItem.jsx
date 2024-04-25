import React from "react";

const MediaItem = ({ item, addToCart, removeFromCart, toggleFavorite }) => {
  const { type, title, favorite } = item;


  return (
    // item list containing each type, title, and btn
    <div className="flex flex-col sm:flex-row justify-between border p-8 bg-blue-200 rounded-md">
      <div className="flex flex-col">

        <h3 className="font-semibold">{title}</h3>
        <p className="ml-4 mt-2 sm:mt-0">Type: {type}</p>
        
      </div>

      <div className="flex mt-4 sm:mt-0">
        <button onClick={() => addToCart(item)} 
          className="border bg-blue-800 text-white rounded-lg p-1 mr-2 hover:scale-110">
          Add to Cart
        </button>

        <button onClick={() => removeFromCart(item)} 
          className="border bg-blue-800 text-white rounded-lg p-1 mr-2 hover:scale-110">
          Remove from Cart
        </button>

        <button onClick={() => toggleFavorite(item.id)} 
          className="border bg-blue-800 text-white rounded-lg p-1 hover:scale-110">
          {favorite ? 'Remove from Favorites' : 'Add to Favorites' }
        </button>
      </div>
    </div>
  );
};

export default MediaItem;
