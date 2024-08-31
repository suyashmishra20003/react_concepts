import './App.css'
import Card from './components/card'

function App() {
  const userDetails= {
    name: "Suyash",
    age: 28
  }
  return (
    <>
        <Card  cardName="Suyash" details={userDetails} btnName="Click"/>
        <Card  cardName="Shikhar" details={userDetails} /> 
    </>
  )
}

export default App
