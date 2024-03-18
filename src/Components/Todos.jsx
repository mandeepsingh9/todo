import React from 'react'
import Todo from './Todo.jsx'
import { useSelector } from 'react-redux'

const Todos = () => 
{

    const obj=useSelector(state=>state.todo.todoValue)

  return (
    <div className='todos'>
      {
        
        obj.map((item,key)=>(
          <Todo item={item} />
        ))

      }
    
    </div>
  )
}

export default Todos