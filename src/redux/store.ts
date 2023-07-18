import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from "./product";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
  reducer: {
    products: persistedReducer
  },
})

const persistor = persistStore(store)


export {persistor};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch