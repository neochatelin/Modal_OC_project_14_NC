import React, { useState } from 'react'

import { ExampleComponent, Modal } from 'react-rails-pagination'
import 'react-rails-pagination/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
     <>
        <button onClick={()=>{setIsOpen(!isOpen)}}>TEST</button>
        <Modal element={<ElemForModal title={"title"}/>} state={[isOpen, setIsOpen]}/>
        <h2>isOpen: {isOpen?"true":"false"}</h2>
     </>
  )
}

const ElemForModal = ({...props})=>{
  const [value, setValue] = useState(0);
  return (
     <div className='ELement' style={{backgroundColor: "white", width: "100%", height: "100%"}}>
        <h1>{props.title}</h1>
        <p>value: {value}</p>
        
        <button onClick={()=>{setValue(value + 1)}}>+</button><button onClick={()=>{setValue(value - 1)}}>-</button>

        <button onClick={()=>{setValue(0);props.closeModal();}}>save</button>
     </div>
  )
}

export default App
