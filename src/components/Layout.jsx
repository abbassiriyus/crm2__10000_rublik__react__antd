import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './Header/Header.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import { useSelector } from 'react-redux'

const { Content } = Layout;

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    useEffect(() => {
        if (token) {
            navigate('/login')
        }
    }, [navigate, token])

    return (
        "token" ? <Layout>
            <Header />
            <Layout>
                { }
                <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <Content style={{ margin: '0 10px', overflow: 'initial', transition: 'all 0.2s' }}>
                    <div style={{ padding: 24, background: 'white', marginLeft: collapsed ? 0 : 200 }}>
                        <Outlet /> { }
                    </div>
                </Content>
            </Layout>
        </Layout> : null)
};

export default AppLayout;
