import { createSlice } from "@reduxjs/toolkit";

export const booking = [
    {
        id: 1,
        name: "Hamza Ramadan",
        phone:"+201117585124",
        specialization: "neurology",
        age: "20",
        date: "20/2/2023",
        email:"hahar067@gmail.com",
        complaint:"تعبان مش عارف لي 😂"
    },
]
export const reducebooking = createSlice({
    name:"reducebooking",
    initialState:booking,
    reducers:{
        addBook:(state , action) =>{
            state.push(action.payload);
        },
        Updateproduct:(state , action) =>{
            const {name , phone ,specialization,age ,email,date,complaint ,id}= action.payload;
            const pp =state.find(product => product.id == id)
            if (pp) {
                pp.name =name;
                pp.specialization =specialization;
                pp.phone =phone;
                pp.age =age;
                pp.date =date;
                pp.email =email;
                pp.complaint =complaint;
            }
        },
        deleteproduct:(state , action) =>{
            const {id}= action.payload;
            const pp =state.find(product => product.id == id)
            if (pp) {
                return state.filter(c => c.id !== id)
            }
        },
    },

})
export const {addBook , Updateproduct,deleteproduct} = reducebooking.actions;
export default reducebooking.reducer;