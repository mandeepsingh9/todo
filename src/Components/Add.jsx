import React, { useRef } from 'react'
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { TodoAction } from './Stores/TodoSlice';
const Add = () => {


   const todoData=useRef();
           const dispatch=useDispatch();

  function handleAdd()
  {
       let abc=(todoData.current.value);
       let obj={
        id:Date.now(),
        todo:abc
            
       }
     dispatch(TodoAction.add(obj))

     todoData.current.value="";
  }
  return (
    <div className='add'>
       <input type='text' ref={todoData}/>
       <Plus size={30} color='rgb(240, 6, 145)' strokeWidth={6} onClick={handleAdd}/>
       
    </div>
  )
}

export default Add