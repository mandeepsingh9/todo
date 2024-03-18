import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todo",
    initialState:{todoValue:[]},
    reducers:{
        add:(state,action)=>{
            

         //  state.todoValue.push(action.payload);
           let newstate=[action.payload,...state.todoValue]
            state.todoValue=newstate; 
        },
        delete:(state,action)=>{
           
            let filterArr=state.todoValue.filter((item)=>{
                return item.id!=action.payload
            })
             state.todoValue=filterArr;    
       
        },
        update:(state,action)=>{
            console.log(action);
        },
        apidata:(state,action)=>{
         
            let newarr=[...action.payload,...state.todoValue];
            state.todoValue=newarr
        }
    }

})

export const TodoAction=TodoSlice.actions;
export default TodoSlice;
