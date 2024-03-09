import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect } from 'react'
import AddCard from './components/AddCard';
import CardList from './components/CardList';

function App() {
  const localStorageCards = JSON.parse(localStorage.getItem("cards")); 
  const [cards, setCards] = useState(localStorageCards || [])

  //                                    v dependency array
  useEffect(saveCardsInLocalStorage, [cards])
 


  function saveCardsInLocalStorage() {
    const key = "cards"; 
    const value = JSON.stringify(cards); 
    localStorage.setItem(key, value); 
  }

  // [a, b, c] OLD  + d VALUE = 
  // [a, b, c, d] NEW

  function addCard(title) {
    // const title = inputRef.current.value
    const cardObject = { title, width: 100, id: Date.now()};
    const newCards = [...cards, cardObject]
    setCards(newCards)
  }
  function deleteCard() {
    const newCards = cards.filter(c => c.title !== title); 
    setCards(newCards)
  }

  return (
    <>
      <h1 className="underline font-bold text-xl">Cards</h1>
      <CardList cards={cards} deleteCard={deleteCard}/>
      <AddCard addCard={addCard}/>

    </>

  )
}

export default App
