import {configureStore} from "@reduxjs/toolkit"; //get from the redux toolkit to setup data layers.

// create a piece(slide) of datalayer where user can store navigation information
import navReducer from "./slices/navSlice"; 

//setup the store and contain the navigation information
export const store = configureStore ({
    reducer: {
        nav: navReducer,
    },
});