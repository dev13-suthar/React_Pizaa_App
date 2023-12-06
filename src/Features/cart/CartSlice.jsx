import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            //payload = new item
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            //payload = id
            state.cart = state.cart.filter(item=>item.pizzaId !== action.payload)
        },
        increseItemQuan(state,action){
            const item = state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuan(state,action){ 
            const item = state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity--;
            // item.quantity<1?state.cart = state.cart.filter(item=>item.pizzaId !== action.payload):null we can do this or
            item.totalPrice = item.quantity * item.unitPrice;
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action); //can use this
        },
        clearCart(state){
            state.cart = []
        },
    }       
})

export const {addItem,deleteItem,increseItemQuan,decreaseItemQuan,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
export const  getcart = state=>state.cart.cart
export const getTotalCartQuantity = state=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0);
export const getPizzaQuantity = id=>state=>state.cart.cart.find(item=>item.pizzaId===id)?.quantity??0;   
export const getTotalCartPrice  = state=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0)