import React from 'react'
import { useRef } from 'react';

export default function AddCard({ addCard }) {
  const inputRef = useRef(null); 
  return (
    <>
        <input ref={inputRef} id="add-card" placeholder="enter title" className="border-4"></input>
        <button 
        className='border-2 hover:bg-gray-300'
        onClick={() => {
            const value = inputRef.current.value; 
            addCard(value); 
        }}
        >Add Card</button>
    </>
  )
}
