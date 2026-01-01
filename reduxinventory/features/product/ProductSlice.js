import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    products: [],
    updateState: null
}


const ProductSlice = createSlice({

    name: "products",
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
        },

        setUpdateState: (state, action) => {
            state.updateState = action.payload
        },

        updateProductData: (state, action) => {
            const index = state.products.findIndex(
                (prod) => prod.id === action.payload.id
            );

            if(index != 1)
            {
                state.products[index] = action.payload;
            }
            state.updateState = null;
        },
        deleteProducts: (state, action) => {
            state.products = state.products.filter(
                (prod)=>prod.id != action.payload
            )
        }
    }

})

export const {addProducts, deleteProducts, setUpdateState, updateProductData} = products.action;
  
export default  ProductSlice.reducer;  