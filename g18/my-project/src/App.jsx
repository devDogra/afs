import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className="underline text-lg font-bold">Cards</h1>
      <div>
          <Card title="Mehar" width={200}/>
          <Card title="Muskan" width={100}/>
          <Card title="Mukul" width={50}/>
          <Card title="Dev"/>
          <Card>
            <h1>Mehvish</h1>
          </Card>
      </div>

    </>
  )
}

export default App
