import React from 'react'

export const Modal = ({...props})=>{
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
