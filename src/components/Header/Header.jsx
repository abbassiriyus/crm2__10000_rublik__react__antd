import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">AbcCRM</Link>
            </div>

            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Главная</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header