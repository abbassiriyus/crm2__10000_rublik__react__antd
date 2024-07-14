import axios from 'axios'
import { logout, setToken } from './authSlice'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api', // Замените на ваш базовый URL
})

export const setupAxiosInterceptors = store => {
    axiosInstance.interceptors.request.use(config => {
        const state = store.getState()
        const token = state.auth.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    })

    axiosInstance.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config
            if (error.response === undefined) {
                console.error(error)
            } else if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true
                try {
                    const state = store.getState()
                    const refreshToken = state.auth.refreshToken
                    const refreshTokenResponse = await axiosInstance({
                        url: '/auth/refresh-token',
                        method: 'post',
                        data: { token: refreshToken, }
                    })
                    const newToken = refreshTokenResponse.data.token
                    const newRefreshToken = refreshTokenResponse.data.refreshToken

                    store.dispatch(setToken({
                        token: newToken,
                        refreshToken: newRefreshToken
                    }))
                    originalRequest.headers.Authorization = `Bearer ${newToken}`

                    return axios(originalRequest)
                } catch (refreshError) {
                    store.dispatch(logout())
                    return Promise.reject(refreshError)
                }
            }

            return Promise.reject(error)
        }
    )
}

export default axiosInstance