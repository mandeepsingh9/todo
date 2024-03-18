import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import Todos from './Components/Todos';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TodoAction } from './Components/Stores/TodoSlice';

function App() {

   const dispatch=useDispatch();
    useEffect(()=>{
        async function apihandle()
        {
           try{
               let res=await fetch("https://dummyjson.com/todos");
               let data=await res.json();

                
               console.log(data.Todos);
                dispatch(TodoAction.apidata(data.todos))

           }
           catch(err)
           {
              console.log("galat h sahi krr lo nahi to mare jaoge");
           }
        }
        apihandle();
    },[])  
  return (
    <div className="App">
       <h1 className='header'>TodoList</h1>
       <Add/>
       <Todos/>

    </div>
  );
}

export default App;
