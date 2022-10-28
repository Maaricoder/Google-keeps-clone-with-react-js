import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    Notes:[]
}
const NoteSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addtonote:(state,action)=>{
            state.Notes.push(action.payload)
        },
        deleteitems:(state,action)=>{
            let newitems = state.Notes.filter((value,index)=>{
                return index !== action.payload
            })
            state.Notes = newitems
        }            
        
    }
    
})


export const {addtonote,deleteitems} = NoteSlice.actions
export default NoteSlice.reducer;