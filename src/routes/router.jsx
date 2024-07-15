import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import InfoPage from '../pages/InfoPage.jsx'
import PotentialTable from '../pages/potential/PotentialTable.jsx'
import AddRecordPage from '../pages/potential/AddRecordPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import Layout from '../components/Layout.jsx'
import AgentYLListPage from '../pages/agent/AgentYLListPage.jsx'
import AgentYLPage from '../pages/agent/AgentYLPage.jsx'
import AgentFLListPage from '../pages/agent/AgentFLListPage'
import AgentFLPage from '../pages/agent/AgentFLPage'
import OtpAgentListPage from '../pages/contragent/OtpAgentListPage.jsx'
import OtpTTListPage from '../pages/contragent/OtpTTListPage.jsx'
import MainPage from '../pages/MainPage.jsx'
import CompanyInfo from '../pages/CompanyInfo.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/home",
                element: <HomePage />,
            },
            {
                path: 'home/:id',
                element: <InfoPage />,
            },
            {
                path: '/tables',
                element: <MainPage />,
            },
            {
                path: '/potential',
                element: <PotentialTable />
            },
            {
                path: '/company-info',
                element: <CompanyInfo />
            },
            {
                path: '/potential/:id',
                element: <AddRecordPage />
            },
            {
                path: '/agentyl',
                element: <AgentYLListPage />
            },
            {
                path: '/agentyl/:id',
                element: <AgentYLPage />
            },
            {
                path: '/agentfl',
                element: <AgentFLListPage />
            },
            {
                path: '/agentfl/:id',
                element: <AgentFLPage />
            },
            {
                path: '/otpTTList',
                element: <OtpTTListPage />
            },
            {
                path: '/otpAgentList',
                element: <OtpAgentListPage />
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])
