import React, { useState } from 'react'
import { Pencil ,Trash2} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { TodoAction } from './Stores/TodoSlice';
import Update from './Stores/Update';
const Todo = ({item}) => {


  const[active,setactive]=useState(false);
  const dispatch=useDispatch();
  function handleDelete(id)
  {
      dispatch(TodoAction.delete(id))
  }

  function handleEdit()
  {
       setactive(true);
  }
  return (
    <div className='todo'>
      <label>{item.todo}</label>
      <div>
        {!active ? <Pencil color='white' size={27} strokeWidth={2} onClick={handleEdit}/> :<Update item={item}/> }
         <Trash2 color='white'size={27} strokeWidth={2} onClick={()=>handleDelete(item.id)}/>
      </div>
    </div>
  )
}

export default Todo