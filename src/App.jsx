import React, { useEffect, useState } from 'react'


const App = () => {
  const [mood , setMood] = useState("feelings")
useEffect(()=>{
alert(" Alert:> Wellcome to my page ")
},[])

  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-20'>
      <div className={`w-40 h-40 ${mood === 'Happy' ? 'bg-green-800' : mood === 'Sad' ? 'bg-blue-300' : 'bg-amber-200'}`}>
      
        <h1 className={`flex justify-center mt-8 font-bold ${mood === `Happy` ? `text-white` : mood === `Sad` ? ` text-amber-100`: `text-Purple`}`}> I am {mood} </h1>
     
        </div>
      <div  className='flex gap-4'>
      <button className='bg-gray-500 w-20 rounded active:scale-95
       shadow-black shadow-sm' onClick={()=>{
        setMood("Happy")
       { alert("Are you feeling Happy")}
       }}>Happy</button>
        <button className='bg-gray-500 w-20 rounded active:scale-95
       shadow-black shadow-sm' onClick={()=>{
        setMood("Sad")
            { alert("Are you feeling Sad")}
        
       }}>Sad</button>
        <button className='bg-gray-500 w-20 rounded active:scale-95
       shadow-black shadow-sm'onClick={()=>{
        setMood("Sleppy")
            { alert("Are you feeling Sleppy")}
       }}>Sleppy</button>
        <button className='bg-gray-500 w-20 rounded active:scale-95
       shadow-black shadow-sm'onClick={()=>{
        setMood("Angry")
            { alert("Are you feeling Angry")}
       }}>Angry</button>
      </div>
    </div>
  )
}

export default App