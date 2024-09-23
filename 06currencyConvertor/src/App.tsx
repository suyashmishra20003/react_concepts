
import { useState } from 'react';
import './App.css'
import { InputBox } from './components';
import { CustomHooks } from './hooks/useCurrencyInfo';

function App() {

    const [amount, setAmount] = useState(0);
    const [from,setFrom] = useState('usd');
    const [to,setTo] = useState('inr');
    const [convertedAmout,setConvertedAmout] = useState(0);

    const currencyInfo = CustomHooks.useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);
    const swap = () => {
        console.log(options)
        setFrom(to);
        setTo(from);
        setConvertedAmout(amount);
        setAmount(convertedAmout);
    }

    const convert = () => {
        const conversionRate = currencyInfo[to];
        const convertedValue = amount * conversionRate;
        
        setConvertedAmout(convertedValue); // Set the converted value

    }
  return (
      <div
          className="w-full bg-slate-950 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setFrom(currency)}
                                selectedCurrency={from}
                                onAmoutChange={(amount) => setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={() => swap()}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                                   label="To"
                                   amount={convertedAmout}
                                   currencyOptions={options}
                                   onCurrencyChange={(currency) => setTo(currency)}
                                     selectedCurrency={to}
                                     amountDisable
                                onAmoutChange={(amount) => setAmount(amount)}

                          />
                      </div>
                      <button type="submit" onClick={() => convert()} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
