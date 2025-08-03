import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list:[],
};

 const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state,action) => {
      
      state.list = action.payload;
    },
    addStudents: (state,action) => {
      state.list.push(action.payload);
    },
    editStudents: (state, action) => {
        const index = state.list.findIndex(s=>s.id===action.payload.id)
      if(index !==-1)
      {
        state.list[index]=action.payload;
      }
    },
    deleteStudents:(state,action)=>{
        state.list= state.list.filter(s=>s.id !==action.payload.id)
    }
  },
})


export const {setStudents , addStudents, editStudents, deleteStudents  } = studentSlice.actions

export default studentSlice.reducer