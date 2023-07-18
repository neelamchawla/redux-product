import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../components/ProductPage/Products";

interface ProductsListInterface {
    products: ProductInterface[]
}

const initialState: ProductsListInterface = {
    products: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, { payload: { title, description, price, id } }) => {
            state.products.push({ id, title, description, price })
        },
        deleteProduct: (state, { payload: { productId } }) => {
            state.products = state.products.filter(product => product.id !== productId)
        },
        editProduct: (state, { payload: { editedProduct } }) => {
            console.log(editedProduct)
            state.products = state.products.map(product => product.id === editedProduct.id ? editedProduct : product);
        }
    }
})
export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;