
## Install

```bash
npm install --save modal_oc_project_14_nc
```

## Usage

when adding the modal you need to give a state and an element a new props is added to your element named closeModal a function that will change the value of the state you passed in;

```jsx
import React, { Component } from 'react'

import Modal from 'modal_oc_project_14_nc'

const ElementToDisplay = (props)=>{
    return (
        <>
            <button onClick={()=>props.closeModal()}>Close Modal</button>
            <p>{props.num}</p>
        </>
    )
}

const app = ()=>{
    return (
        <>
            <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
            <Modal element={<ElementToDisplay num={43}/>} state={[modalIsOpen, setModalIsOpen]}/>
        </>
    )
}

```