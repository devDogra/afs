import './App.css'
import Card from './components/Card'
import { useRef, useState, useEffect } from 'react'

function App() {
  const inputRef = useRef(null);


  const localStorageCards = JSON.parse(localStorage.getItem("cards")); 
  const [cards, setCards] = useState(localStorageCards || [])


  //                                    v dependency array
  useEffect(saveCardsInLocalStorage, [cards])
  useEffect(getProductsFromAPI, []) // Runs only on initial/first render

  function getProductsFromAPI() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        setCards(products); 
      })
  }




  function saveCardsInLocalStorage() {
    const key = "cards"; 
    const value = JSON.stringify(cards); 
    localStorage.setItem(key, value); 
  }

  // [a, b, c] OLD  + d VALUE = 
  // [a, b, c, d] NEW
  function addCard() {
    const title = inputRef.current.value
    const cardObject = { title, width: 100, id: Date.now()};
    const newCards = [...cards, cardObject]
    setCards(newCards)
  }

  return (
    <>
      <h1 className="underline font-bold text-xl">Cards</h1>
      <div>
        {
          cards.map(el => {
            return (
              <Card 
                key={el.id} 
                title={el.title} 
                width={el.width}
              >
              </Card>
            )
          })
        }
     
      </div>

      <input ref={inputRef} placeholder="enter title"></input>
      <button className="hover:underline" onClick={addCard}>Add Card</button>
    </>

  )
}

export default App
