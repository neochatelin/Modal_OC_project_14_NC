import React from 'react'

/*
   this component is a modal it allow you to put your element in it and with a state that you have created to open in and close it;
*/

export const Modal = ({...props})=>{
  //when adding the modal you need to give a state and an element a new props is added to your element named closeModal a function that will change the value of the state you passed in;
  const Element = React.cloneElement(props.element, {closeModal:()=>setIsOpen(false)});
  const isOpen = props.state[0];
  const setIsOpen = props.state[1];

  return (
     <div style={isOpen?{
        display: "flex",
        position: "absolute",
        top:"0px",
        left:"0px",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000063",
        justifyContent: "center",
        alignItems: "center"}:{display: "none"}}>
       <div style={isOpen?{position: "absolute", width: "100vw", height: "100vh"}:{}} onClick={()=>{setIsOpen(false)}}></div>
       <div style={{zIndex: "1",
       width: "520px",
       height: "550px",
       justifyContent: "center",
       alignItems: "center"}}>
           <div style={{zIndex: "1",
           display: "flex",
           flexDirection: "column",
           width: "520px",
           height: "550px",
           alignItems: "end"}}>
              {Element}
           </div>
       </div>
     </div>
  );
}
