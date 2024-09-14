import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "@#$%^&*!"
    }

    for (let i = 0; i <= length; i++) {
      // console.log( Math.floor(Math.random() * (max - min + 1)) + min );
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }
   
    setPassword(pass)
    //!  Here useCallback is used to optimize the performance by avoiding unnecessary recreation of the function when the component re-renders again and again. This process is called memoization.
    //! This is used for optimization.
  }, [length, numAllowed, charAllowed])


  useEffect(()=>{
    passwordGenerator()
    //! Here useEffect is uesd to run thr passwordGenerator function only once when the component is mounted or when the dependencies (length, numAllowed, charAllowed) changes.
    //! This is used for running the function.

  },[length, numAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordInputRef.current?.select()
    passwordInputRef.current?.setSelectionRange(0, 4) 
    console.log(passwordInputRef)
  },[password])

  return (
    <>
      <div className="w-full h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordInputRef}
            />
            <button onClick={() => copyPasswordToClipboard()}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>

          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(Number(e.target.value))
                }}
              />
              <label>Length: ({length})</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={(e) => {
                  setNumAllowed(e.target.checked)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
