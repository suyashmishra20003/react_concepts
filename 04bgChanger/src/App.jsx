import './App.css'
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('white');

  const buttons = [
    'Red',
    'Green',
    'Blue',
    'Gray',
    'Yellow',
    'Pink',
    'Olive',
    'Orange',
    'Purple',
    'White',
    'Black',
    'Tomato',
  ];

  const changeBg = (btnColor) => {
    let colorName = btnColor.toLowerCase()
    setColor(colorName)
  }

  return (
    <>
      <h1>BG Changer Project</h1>
      <div style={{ backgroundColor: color }} className="w-full h-screen flex justify-center items-center" >
        <div className="bg-white py-2 px-3 rounded ">
          {buttons.map((btnColor) => (
            <button
              key={ btnColor + 'btn'}
              style={{ 
                backgroundColor: btnColor.toLowerCase() === 'white' ? 'lightgray' : btnColor.toLowerCase() ,
                color: btnColor.toLowerCase() === 'white' ? 'black' : 'white',
              }}
              onClick={() => changeBg(btnColor)}
              className="outline-none px-4 py-2 mx-2 bolder rounded-3xl"
              type="button"
            >
              {btnColor}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
