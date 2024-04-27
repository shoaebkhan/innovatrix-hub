import React from 'react'


const  MyButton=()=> {
  const handleClick=()=>{
    alert("I'm clicked");
  };
  return (
   <div className='flex gap-5'>
    <button className="p-2 bg-slate-100 rounded-lg" onClick={handleClick()}>Button 1</button>
    web events, react hooks are client components
   </div>
   
  )
}

export default MyButton;