import { configureStore } from "@reduxjs/toolkit";
import  reducebooking  from "./Reducers/Abooking";


export const store = configureStore({
    reducer:{
        Booking:reducebooking,
    },
})