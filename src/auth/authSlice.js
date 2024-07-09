import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { serverApiUrl } from '../Config.jsx'

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return null
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.error('Ошибка при извлечении состояния из localStorage:', error)
        return null
    }
}
const persistedState = loadStateFromLocalStorage()
const initialState = {
    token: persistedState?.token || null,
    refreshToken: persistedState?.refreshToken || null,
    role: persistedState?.role || null,
    status: 'idle',
}

export const fetchToken = createAsyncThunk('auth/fetchToken', async (credentials) => {
    const response = await axios.post(`${serverApiUrl}/auth/login`, credentials)
    return response.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
            state.refreshToken = action.payload.refreshToken
            state.role = action.payload.role
            localStorage.setItem('state', JSON.stringify(state))
        },
        logout: (state) => {
            state.token = null
            state.refreshToken = null
            state.role = null
            localStorage.setItem('state', JSON.stringify(state))
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.refreshToken = action.payload.refreshToken
            state.role = action.payload.role
            localStorage.setItem('state', JSON.stringify(state))
        })
    },
})

export const {
    setToken,
    logout
} = authSlice.actions

export default authSlice.reducer