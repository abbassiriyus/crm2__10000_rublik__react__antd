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
import Home from '../pages/Home.jsx'
import UploadClients from '../pages/administration/UploadClients.jsx'
import Reports from '../pages/administration/Reports.jsx'
import ReferenceListPage from '../pages/administration/ReferenceListPage.jsx'
import BankListPage from '../pages/administration/BankListPage.jsx'
import CompanyDraftListPage from '../pages/administration/CompanyDraftListPage.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: 'home/:id',
                element: <InfoPage />,
            },
            {
                path: 'home/tables',
                element: <MainPage />,
            },
            {
                path: '/potential',
                element: <PotentialTable />
            },
            {
                path: '/uploadClients',
                element: <UploadClients />
            },
            {
                path: '/home/company-info',
                element: <CompanyInfo />
            },
            {
                path: '/reports',
                element: <Reports />
            },
            {
                path: '/bank',
                element: <BankListPage />
            },
            {
                path: '/company',
                element: <CompanyDraftListPage />
            },
            {
                path: '/company/:id',
                element: <InfoPage />
            },
            {
                path: '/reference/:id',
                element: <InfoPage />
            },
            {
                path: '/bank/:id',
                element: <InfoPage />
            },
            {
                path: '/reference',
                element: <ReferenceListPage />
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
                element: <InfoPage />
            },
            {
                path: '/agentfl',
                element: <AgentFLListPage />
            },
            {
                path: '/agentfl/:id',
                element: <InfoPage />
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
