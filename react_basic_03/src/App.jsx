// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
  <>
     
     <h1 className='bg-slate-600 text-white p-4 rounded-2xl'>tailwind test</h1>
     <Card username = "Dhruv" btnText="clickme" />
     <Card username = "YoYoYo" />
   </>
  )
    
}

export default App
