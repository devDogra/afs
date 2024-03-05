import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect } from 'react';


function App() {
  const inputRef = useRef(null); 
  
  const localStorageNames = JSON.parse(localStorage.getItem("names"))
  const [names, setNames] = useState(localStorageNames || [])

  useEffect(getProductsFromAPI, [])
  useEffect(saveNamesInLocalStorage, [names])

  function getProductsFromAPI() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
          const productNames = products.map(p => p.title); 
          setNames(productNames); 
        });
  }

  function saveNamesInLocalStorage() {
    const key = "names"; 
    const value = JSON.stringify(names);
    localStorage.setItem(key, value); 
  }

  // [a, b, c, d] old
  // [a, b, c, d, m] NEW
  function addCard() {
    const value = inputRef.current.value; 
    const updatedNames = [...names, value]
    setNames(updatedNames)

    // setNames(names.concat(value)); 
  }

  return (
    <>
      {
        names.map(name => {
          return <Card title={name} width={100} key={name}/>
        })
      }

      <input ref={inputRef} id="add-card" placeholder="enter title" className="border-4"></input>
      <button 
        className='border-2 hover:bg-gray-300'
        onClick={addCard}
      >Add Card</button>
    </>
  )
}

export default App
