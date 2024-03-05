import './App.css'
import Card from './components/Card'
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null); 

  const [names, setNames] = useState([
    "A", "B", "C", "D",
  ])

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
