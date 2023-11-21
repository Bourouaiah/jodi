import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './DbSlice'
export const store = configureStore({
    reducer: {
        db: itemsSlice
    },
})