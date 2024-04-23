import React from "react";

const MediaItem = ({ item }) => {
  const { id, type, title } = item;

  const handleClick = () => {
    addToCart(id);
  };

  return (
    // item list containing each id, type and title
    <div className="flex justify-between border p-8 bg-blue-200 rounded-md">
      <h3 className="font-semibold">{title}</h3>
      <p>Type: {type}</p>

      {/* button that will ad id of item once clicked */}
      <button onClick={handleClick} 
      className="border bg-blue-800 text-white rounded-lg p-1 hover:scale-110">
        Add to Cart
      </button>
    </div>
  );
};

export default MediaItem;
