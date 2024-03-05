import './App.css'
import Card from './components/Card'
import { useRef, useState } from 'react';

function App() {
  
  const [names, setNames] = useState([ "A", "B", "C", "D" ])

  const refInput = useRef(null); 

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