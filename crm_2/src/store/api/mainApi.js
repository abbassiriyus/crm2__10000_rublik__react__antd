import { createApi } from '@reduxjs/toolkit/query/react'
import axiosInstance from '../../auth/setupAxios.js'
import { serverApiUrl } from '../../Config.jsx'

const axiosBaseQuery =
    ({ baseUrl }) => async ({
        url,
        method,
        body
    }) => {
        try {
            const result = await axiosInstance({
                url: `${serverApiUrl}` + baseUrl + url,
                method: method,
                data: body,
            })
            return { data: result.data }
        } catch (axiosError) {
            const err = axiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

export const mainApi = createApi({
    reducerPath: 'mainApi',
    tagTypes: ['Rows'],
    baseQuery: axiosBaseQuery({ baseUrl: '/' }),
    endpoints: build => ({
        getRows: build.query({
            query: ({
                page,
                pageSize,
                sort,
                filters,
                path
            }) =>
                ({
                    url: path + '/list',
                    method: 'post',
                    body: {
                        order: {
                            field: sort?.sortField ? sort.sortField : 'id',
                            sort_type: sort?.sortDirection && sort.sortDirection === 'descend' ? 'DESC' : 'ASC'
                        },
                        pageable: {
                            page: page,
                            size: pageSize
                        },
                        filter: filters,
                    }
                })
            ,
            providesTags: result =>
                result
                    ? [
                        ...result.data?.map(({ id }) => ({
                            type: 'Rows',
                            id
                        })),
                        {
                            type: 'Rows',
                            id: 'LIST'
                        },
                    ]
                    : [{
                        type: 'Rows',
                        id: 'LIST'
                    }],
        }),
        getRowInfo: build.query({
            query: ({
                path,
                id
            }) => {
                return { url: path + `/${id}` }
            },
            providesTags: result => {
                const baseTag = {
                    type: 'Rows',
                    id: 'LIST'
                }

                if (!Array.isArray(result?.data)) {
                    return [baseTag]
                }

                const rowTags = result?.data?.map(({ id }) => ({
                    type: 'Rows',
                    id
                }))

                return [...rowTags, baseTag]
            }
        }),
        updateRow: build.mutation({
            query: ({ ...row }) => ({
                url: row.path,
                method: 'put',
                body: { ...row, }
            }),
            invalidatesTags: [{
                type: 'Rows',
                id: 'LIST'
            }],
        }),
        createRow: build.mutation({
            query: ({ ...row }) => ({
                url: row.path,
                method: 'put',
                body: { ...row }
            }),
            invalidatesTags: [{
                type: 'Rows',
                id: 'LIST'
            }],
        }),
        deleteRow: build.mutation({
            query: ({
                id,
                path
            }) => ({
                url: path + `/${id}`,
                method: 'delete',
            }),
            invalidatesTags: [{
                type: 'Rows',
                id: 'LIST'
            }],
        }),
        getSelects: build.query({
            query: ({
                path,
                params
            }) => {
                const pathParams = () => {
                    if (params !== undefined) {
                        // Преобразование массива в строку
                        const paramString = params.map(obj => {
                            // Получаем ключ и значение каждого объекта
                            const key = Object.keys(obj)[0]
                            const value = obj[key]
                            // Возвращаем строку 'ключ=значение'
                            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                        }).join('&') // Объединяем все 'ключ=значение' с помощью '&'
                        return '?' + paramString
                    } else {
                        return ''
                    }
                }
                return { url: path + pathParams() }
            },
        }),
        getReport: build.query({
            query: ({
                name,
                ...row
            }) => ({
                url: '/report?name=' + name,
                method: 'put',
                body: {
                    ...row
                }
            })
        }),
        uploadFile: build.query({
            query: ({
                path,
                ...row
            }) => ({
                url: '/report?name=' + name,
                method: 'put',
                body: {
                    ...row
                }
            })
        }),
    })
})

export const {
    useGetRowsQuery,
    useGetRowInfoQuery,
    useUpdateRowMutation,
    useDeleteRowMutation,
    useCreateRowMutation,
    useGetSelectsQuery,
    useGetReportQuery
} = mainApi
