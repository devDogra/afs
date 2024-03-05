import './App.css'
import Card from './components/Card'
import { useRef, useState } from 'react'

function App() {
  const inputRef = useRef(null);

  const data = [
    { title: "One", width: 200, id: 10001},
    { title: "Two", width: 100, id: 10002},
    { title: "Three", width: 150, id: 10003},
  ]
  
  const [cards, setCards] = useState(data)

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
