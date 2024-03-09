import React from 'react'
import { useRef } from 'react';

export default function AddCard({ addCard }) {
  const refInput = useRef(null); 

  return (
    <>
        <input ref={refInput} placeholder="enter title"></input>

        <button 
        onClick={() => {
            const value = refInput.current.value; 
            addCard(value); 
        }}
        className="bg-green-200 hover:bg-green-500">
            Add Card
        </button>
    </>

  )
}
