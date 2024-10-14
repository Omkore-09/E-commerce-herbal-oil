
import {configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import adminProductsSlice from './admin/product-slice'
import shoppingProductsSlice from './shop/products-slice'
import shopCartSlice from './shop/cart-slice'
import shopAddressSlice from './shop/address-slice'

const store = configureStore({
    reducer : {
        auth :  authReducer,
        adminProducts : adminProductsSlice,
        shoppingProducts : shoppingProductsSlice,
        shopCart : shopCartSlice,
        shopAddress : shopAddressSlice
    }
})

export default store ;
