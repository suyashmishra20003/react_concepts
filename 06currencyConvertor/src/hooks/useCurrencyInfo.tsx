import { useEffect, useState } from 'react'
export class CustomHooks {
    
    public static useCurrencyInfo = (currency:string) => {
        const [data, setData] = useState<any>({})

        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => setData(data[currency]))
            .catch(error => console.error('Error:', error));
            
        },[currency])

        return data;
    }
}

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json