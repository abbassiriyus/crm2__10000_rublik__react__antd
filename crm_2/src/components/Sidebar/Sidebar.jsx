import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AuditOutlined, LineChartOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false) // State to manage collapse
    const { role } = useSelector(state => state.auth)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const items = []

    items.push({
        key: 0,
        label: <Link to="/">Главная страница</Link>,
    })

    items.push({
        key: 1,
        label: 'Компании',
        children: [{
            key: 2,
            icon: <LineChartOutlined/>,
            label: <Link to="/company">Черновики</Link>
        }]
    })

    role !== 'admin' && items.push({
        key: 5,
        label: 'Администрирование',
        children: [{
            key: 6,
            label: 'Справочники',
            children: [{
                key: 7,
                label: <Link to="/reference">Справочники</Link>,
                icon: <UnorderedListOutlined/>
            }, {
                key: 8,
                label: <Link to="/bank">Банки</Link>,
                icon: <UnorderedListOutlined/>
            }],
        }]
    })

    role !== 'admin' && items.push({
        key: 9,
        label: 'Агенты',
        icon: <AuditOutlined/>,
        children: [{
            key: 3,
            label: <Link to="/agentYL">Агенты ЮЛ</Link>
        }, {
            key: 4,
            label: <Link to="/agentFL">Агенты ФЛ</Link>
        }]
    })

    items.push({
        key: 12,
        icon: <LineChartOutlined/>,
        label: <Link to="/potential">Потенциал</Link>
    })

    items.push({
        key: 13,
        label: <Link to="/reports">Журналы и отчеты</Link>,
        icon: <LineChartOutlined/>
    })

    role !== 'admin' && items.push({
        key: 15,
        label: 'Контрагенты',
        icon: <AuditOutlined/>,
        children: [{
            key: 16,
            label: <Link to="/otpTTList">Загрузка ТТ в ОТП</Link>
        }, {
            key: 14,
            label: <Link to="/otpAgentList">Загрузка агентов в ОТП</Link>
        }]
    })
    items.push({
        key: 17,
        icon: <LineChartOutlined/>,
        label: <Link to="/uploadClients">Загрузка клиентов массивом</Link>
    })

    return (
        <Sider
            width={300}
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items}/>
        </Sider>
    )
}

export default Sidebar
