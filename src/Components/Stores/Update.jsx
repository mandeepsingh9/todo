import { Upload } from 'lucide-react'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { TodoAction } from './TodoSlice';

const Update = ({item}) => {

     let updatedata=useRef();
     let dispatch=useDispatch();
    function handleupdate(id)
    {
        dispatch(TodoAction.update(id));
    }
  return (
    <div>
        <input type='text' ref={updatedata}/>
        <Upload onClick={()=>handleupdate(item.id)}/>
    </div>
  )
}

export default Update