import { useState } from 'react'
import {Model} from './components/Model'
import './App.css'

function App() {
  const [modelOpen,setModelOpen] = useState(false)

  const handleButtonClick= ()=>{
    setModelOpen(false)
  }

  return (
    <div className='App'>
      <button className="btn btn-open" onClick={()=>setModelOpen(true)}>Open</button>
      {modelOpen &&(
      <Model onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick} >
        <h1>This is the model ttle</h1>
        <p>This is the model descrioption</p>
      </Model>)}
       
    </div>
  )
}

export default App
