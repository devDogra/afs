import './App.css'
import Card from './components/Card'

function App() {
  const persons = [
    { name: "Dev", company: "Coding Blocks", },
    { name: "Vishakha", company: "Microsoft" },
]

  return (
    <>
      <h1 className="underline font-bold text-xl">Cards</h1>
      <div>
        <Card title="One" width={200}></Card>
        <Card title="Two" width={50}></Card>
        <Card title="Three"></Card>
      </div>

      {
        persons.map(p => {
          return (
            <Card>
              <h1 className='text-2xl'>{ p.name }</h1>
              <h2 className='text-lg'>{ p.company }</h2>
            </Card>
          )
        })
      }


    </>
  )
}

export default App