import { getAddress } from "../../services/apiGeocoding";
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
  
// }

export const fetchAddress  = createAsyncThunk('user/fetchAddress',async function(){
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
} )

const InitialState = {
    username: '',
    status:'idle',
    posiion:{},
    address:'',
    erorr:'',
    lastOrder:'',
};

const userSlice = createSlice({
  name:'user',
  initialState:InitialState,
  reducers:{
    updateName(state,action){
      state.username = action.payload;
    },
    updateOrders(state,action){
      state.lastOrder = action.payload;
    }
  },
  extraReducers:(builder)=>builder.addCase(fetchAddress.pending,(state)=>{state.status='loading'},
  builder.addCase(fetchAddress.fulfilled,(state,action)=>{
    state.posiion = action.payload.position;
    state.address = action.payload.address;
    state.status='idle'}),
  builder.addCase(fetchAddress.rejected,(state,action)=>{
    state.status = 'error',
    state.erorr = action.error.message;
  })
  ),
})

export const {updateName,updateOrders}  = userSlice.actions;
export  default userSlice.reducer;
