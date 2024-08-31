import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1
      //! This will not work value will not change because of "state as a snapshot" See video 8 for explanation
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      //? This will work
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    } else {
      alert('Counter value cannot be greater than 20 !!!')
    }
  }
  const substractValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    } else {
      alert('Counter value cannot be Negative !!!')
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue} type="button">Add Value {counter}</button>
      <br />
      <br />
      <button onClick={substractValue} type="button">Substract Value {counter} </button>

    </>
  )
}

export default App
