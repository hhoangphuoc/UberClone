import { createSlice } from "@reduxjs/toolkit";

//define initial state of datalayer
const initialState = {

    //these information will be filled by get from GoogleMap API later
    origin: null,
    destination: null,
    travelTimeInformation: null,
}


// PUSH DATA TO DATALAYER ( by applying actions)

export const navSlice = createSlice({
    //each slice has: a name, initial state and reducer

    // reducer will be use to dispatch and set the action to datalayer.
    name: 'nav',
    initialState,
    reducer: {
        //define different actions for this datalayer
        
        //Action 1: change the state of origin to another destionation
        setOrigin: (state, action) => {
            //action will be set and changed information will be set to 'origin' state
            state.origin = action.payload;
        },

        //Action 2: change the destination to another data when this action is load.
        setDestination: (state,action) => {
            state.destination = action.payload;
        },

        //Action 3: change travelTimeInformations when this action is load.
        setTravelTimeInformation: (state,action) => {
            state.travelTimeInformations = action.payload;
        },

    },
});

//export all the action to used in another files
export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;


// TO PULL DATA FROM DATALAYER, use Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer; //export this slice and connect it to the store by reducer
