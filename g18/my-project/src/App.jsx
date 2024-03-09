import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect, useCallback } from 'react';
import AddCard from './components/AddCard';
import CardList from './components/CardList';


function App() {
  
  const localStorageNames = JSON.parse(localStorage.getItem("names"))
  const [names, setNames] = useState(localStorageNames || [])

  useEffect(saveNamesInLocalStorage, [names])

  function saveNamesInLocalStorage() {
    const key = "names"; 
    const value = JSON.stringify(names);
    localStorage.setItem(key, value); 
  }

  // [a, b, c, d] old
  // [a, b, c, d, m] NEW

  function addCard(value) {
    // const value = inputRef.current.value; 
    const updatedNames = [...names, value]
    setNames(updatedNames)

    // setNames(names.concat(value)); 
  }

  function deleteCard(title) {
    const updatedNames = names.filter(n => n !== title); 
    setNames(updatedNames); 
  }

  return (
    <>
      <CardList names={names} deleteCard={deleteCard}/>
      <AddCard addCard={addCard}/>
    </>
  )
}

export default App
