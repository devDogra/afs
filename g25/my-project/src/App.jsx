import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect } from 'react';

function App() {
  
  const namesInLocalStorage = JSON.parse(localStorage.getItem("names"))

  // ["a", "b", "c"] 
  // ["eraser", "pencil"] X
  
  const [names, setNames] = useState(namesInLocalStorage || [])

  const refInput = useRef(null); 
  //                     v dependency array
  useEffect(saveCardsInLocalStorage, [names])
  useEffect(getProductsFromAPI, []);

  function getProductsFromAPI() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        const productNames = products.map(p => p.title);
        setNames(productNames); 
      })
  }

  function saveCardsInLocalStorage() {
    const key = "names";
    const value = JSON.stringify(names);
    localStorage.setItem(key, value);   
  }


  // [ a, b, c, d] old
  // [a, b, c, d, p] new
  function addCard() {
    const value = refInput.current.value;
    const newNames = [...names, value];
    setNames(newNames);
  }

  return (
    <>
      {
        names.map(p => {
          return (
            <Card key={p} title={p}/>
          )
        })
      }

      <input ref={refInput} placeholder="enter title"></input>
      <button 
      onClick={addCard}
      className="bg-green-200 hover:bg-green-500">
        Add Card
      </button>
    </>
  )
}

export default App