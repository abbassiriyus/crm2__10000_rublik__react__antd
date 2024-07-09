import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToken } from '../auth/authSlice.js'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

const Login = () => {
    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    })
    const dispatch = useDispatch()
    const error = useSelector(state => state.auth.error)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const actionResult = await dispatch(fetchToken(credentials))
        const result = unwrapResult(actionResult)
        console.log(result)
        navigate('/')
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Item rules={[{ required: true }]}>
                    <Input
                        type="text"
                        name="login"
                        value={credentials.login}
                        onChange={handleChange}
                        placeholder="Логин"/>
                </Form.Item>
                <Form.Item rules={[{ required: true }]}>
                    <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={credentials.password}
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Button type="primary" onClick={handleSubmit}>Login</Button>
            </Form>
            {error && <p>{error}</p>}
        </>
    )
}

export default Login