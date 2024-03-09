import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect } from 'react';
import AddCard from './components/AddCard';
import CardList from './components/CardList';

function App() {
  
  const namesInLocalStorage = JSON.parse(localStorage.getItem("names"))

  // ["a", "b", "c"] 
  // ["eraser", "pencil"] X
  
  const [names, setNames] = useState(namesInLocalStorage || [])

 
  //                     v dependency array
  useEffect(saveCardsInLocalStorage, [names])
  // useEffect(getProductsFromAPI, []);

  // function getProductsFromAPI() {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(products => {
  //       const productNames = products.map(p => p.title);
  //       setNames(productNames); 
  //     })
  // }

  function saveCardsInLocalStorage() {
    const key = "names";
    const value = JSON.stringify(names);
    localStorage.setItem(key, value);   
  }


  // [ a, b, c, d] old
  // [a, b, c, d, p] new
  function addCard(value) {
    const newNames = [...names, value];
    setNames(newNames);
  }

  function deleteCard(title) {
    const newNames = names.filter(n => n !== title); 
    setNames(newNames); 
  }

  return (
    <>
      <CardList names={names} deleteCard={deleteCard}/>
      <AddCard addCard={addCard}/>
    </>
  )
}

export default App