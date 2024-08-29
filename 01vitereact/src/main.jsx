import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
// const anotherElement = (
//   <a href="https://reactjs.org">Visit React Doc</a>
// )

const reactElememt = React.createElement(
  'a',
  {
    href: 'https://reactjs.org',
    target: '_blank',
    title:'Link for visiting reactjs.org',
    id: 'linkTag',
  },
  'click me to visit reactjs.org'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  //  reactElememt
  <>
  {reactElememt}
  <App />
  </>
)
