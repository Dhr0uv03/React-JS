import React from 'react'
import ReactDom from 'react-dom/client'
// import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>custom react app</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type : 'a',
//   props : {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children : 'click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>VISIT GOOGLE</a>
// )

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(

  // anotherElement,
  ReactElement
  // <App />
  // <MyApp />

)


