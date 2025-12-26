import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title, details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex flex-col lg:w-1/2 gap-4 items-start p-10'>
          <h1 className='text-4xl font-bold'>Your Notes</h1>


          <input type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium border-2 rounded outline-none'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)            
          }}
          />

          <textarea type="text" 
          placeholder='Write Details Here' 
          className='px-5 h-32 py-2 flex items-start flex-row font-medium w-full border-2 rounded outline-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='bg-white text-black active:scale-95 w-full px-5 py-2 rounded outline-none font-medium'>Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto items-start justify-start'>
          {task.map(function(elem,idx){

            return <div key={idx} className="flex flex-col justify-between relative h-52 w-40 bg-cover rounded-2xl text-black px-4 pt-8 pb-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 text-xs leading-tight font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs text-white rounded font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>      
    </div>
  )
}

export default App
