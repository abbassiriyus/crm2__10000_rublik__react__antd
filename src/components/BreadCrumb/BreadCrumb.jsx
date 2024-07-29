// eslint-disable-next-line simple-import-sort/imports
import { Link, useLocation } from 'react-router-dom'
import 'antd/dist/reset.css'

import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
export default function Breadcrumbs() {
    const location = useLocation()

    const lastPath = '/home/' + location.pathname.at(-1)
    const lastPath_1 = '/agentfl/' + location.pathname.at(-1)
    const lastPath_2 = '/agentyl/' + location.pathname.at(-1)
    const lastPath_3 = '/potential/' + location.pathname.at(-1)
    const lastPath_4 = '/company/' + location.pathname.at(-1)
    const lastPath_5 = '/reference/' + location.pathname.at(-1)
    const lastPath_6 = '/bank/' + location.pathname.at(-1)
    const breadcrumbNameMap = {
        '/home': 'home',
        '/home/company-info': 'company-info',
        [lastPath]: location.pathname.at(-1),
        [lastPath_1]: location.pathname.at(-1),
        [lastPath_2]: location.pathname.at(-1),
        [lastPath_3]: location.pathname.at(-1),
        [lastPath_4]: location.pathname.at(-1),
        [lastPath_5]: location.pathname.at(-1),
        [lastPath_6]: location.pathname.at(-1),
        '/company-info': 'company-info',
        '/home/tables': 'tables',
        '/potential': 'potential',
        '/agentfl': 'agentFL',
        '/agentyl': 'agentYL',
        '/otpTTList': 'otpTTList',
        '/otpAgentList': 'otpAgentList',
        '/company': 'company',
        '/reference': 'reference',
        '/bank': 'bank',
        '/reports': 'reports',
        '/uploadClients': 'uploadClients',
    }

    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}  </Link>
            </Breadcrumb.Item>
        )
    })

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">
                <HomeOutlined />
            </Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems)

    return (
        <div className='mb-5 breadCrumb' >
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    )
}
