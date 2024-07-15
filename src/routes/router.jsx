import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import InfoPage from '../pages/InfoPage.jsx'
import ReferenceListPage from '../pages/administration/ReferenceListPage.jsx'
import ReferencePage from '../pages/administration/ReferencePage.jsx'
import PotentialTable from '../pages/potential/PotentialTable.jsx'
import AddRecordPage from '../pages/potential/AddRecordPage.jsx'
import Reports from '../pages/administration/Reports.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import Layout from '../components/Layout.jsx'
import AgentYLListPage from '../pages/agent/AgentYLListPage.jsx'
import AgentYLPage from '../pages/agent/AgentYLPage.jsx'
import AgentFLListPage from '../pages/agent/AgentFLListPage'
import AgentFLPage from '../pages/agent/AgentFLPage'
import OtpAgentListPage from '../pages/contragent/OtpAgentListPage.jsx'
import OtpTTListPage from '../pages/contragent/OtpTTListPage.jsx'
import UploadClients from "../pages/administration/UploadClients.jsx";
import TabPage from '../pages/administration/CompanyDraftListPage.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/",
                element: <HomePage />,
            },
            {
                path: '/:id',
                element: <InfoPage />,
            },
            {
                path: '/reference',
                element: <ReferenceListPage />,
            },
            {
                path: '/reference/:id',
                element: <ReferencePage />
            },
            {
                path: '/potential',
                element: <PotentialTable />
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
                path: '/company',
                element: <TabPage />
            },
            {
                path: '/reports',
                element: <Reports />
            },
            {
                path: '/otpTTList',
                element: <OtpTTListPage />
            },
            {
                path: '/otpAgentList',
                element: <OtpAgentListPage />
            },
            {
                path: 'uploadClients',
                element: <UploadClients />
            }
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])
