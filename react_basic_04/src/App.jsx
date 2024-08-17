import { useState,useCallback,useEffect,useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const[length,setLength] = useState(8)
 const[numberAllowed,setnumberAllowed] = useState(false)
 const[charAllowed,setcharAllowed] = useState(true)
 const[password,setPassword] = useState("")

 const passwordRef = useRef(null)     

 const passwordGenerator = useCallback ( () => {
  let pass = ""
  let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
  
  if(numberAllowed){
    str += "0123456789"  
  }
  if(charAllowed){
    str += "!@#$%^&*(){}"
  }

  for (let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  
  
  setPassword(pass)
 
 } ,[length,numberAllowed,charAllowed,setPassword])

 const copyPasswordToClipboard = () => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)

  window.navigator.clipboard.writeText(password)
 }

   useEffect(() => {
    passwordGenerator()
   }, [length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-white bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} 
        className='outline-none w-full py-1 px-3 text-black' 
        placeholder='password' readOnly ref={passwordRef}/>
        <button className='px-3 py-3 rounded-lg bg-slate-400' onClick={copyPasswordToClipboard}>Copy</button>
      
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={60} value={length} className='cursor-pointer' onChange={
            (e) => {setLength(e.target.value)}
          }/>
          <label>LENGTH:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id= "numberInput" onChange={ () => {
            setnumberAllowed((prev) => !prev)
          }} />
          <label> Numbers </label>
          </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id= "charInput" onChange={ () => {
            setcharAllowed((prev) => !prev)
          }} />
          <label> Characters </label>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
