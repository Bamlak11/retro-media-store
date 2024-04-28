"use client";
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import MediaList from "./../components/MediaList";


const cd = () => {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'VHS', title: 'Back to the Future' },
    { id: 2, type: 'DVD', title: 'The Matrix'},
    { id: 3, type: 'CD', title: 'Thriller - Michael Jackson'},
  ]);

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState('');

  const addToCart = (item) =>{
    setCart([...cart, item]);
    setMessage(`Added ${item.title} to the cart.`);
  }

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    setMessage(`Removed ${item.title} to the cart.`);
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
    <main className="flex min-h-screen bg-blue-400">
    <div className='mt-2 mx-auto px-2 py-2 max-w-screen w-full'>
      <Navbar />
      <h1 className='flex justify-center p-2 m-2'>CD</h1>

      <MediaList mediaItems={mediaItems.filter(item => item.type === 'CD')}
       addToCart={addToCart}
       removeFromCart={removeFromCart}
       toggleFavorite={toggleFavorite}/>
{message && <div>{message}</div>}
    </div>
    </main>
  )
}

export default cd
