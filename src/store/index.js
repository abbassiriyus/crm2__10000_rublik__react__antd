import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './api/mainApi.js'
import authReducer from '../auth/authSlice.js'
import { setupAxiosInterceptors } from '../auth/setupAxios.js'
import MainTable from './mainTable/MainTable.js'

const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        auth: authReducer,
        MainTable

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(mainApi.middleware),
})

setupAxiosInterceptors(store)

export default store
