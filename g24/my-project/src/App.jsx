import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="underline font-bold text-xl">Cards</h1>
      <div>
        <Card title="One" width={200}></Card>
        <Card title="Two" width={100}></Card>
        <Card title="Three"></Card>
      </div>
    </>

  )
}

export default App
