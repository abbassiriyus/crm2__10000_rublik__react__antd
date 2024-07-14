import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BaseDateColumn from '../../components/Columns/BaseDateColumn'
import BaseInputColumn from '../../components/Columns/BaseInputColumn'
import BaseSelectColumn from '../../components/Columns/BaseSelectColumn'
import MainTable from '../../components/MainTable/MainTable.jsx'

const AgentFLListPage = () => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    const path = 'agentfl'

    useEffect(() => {
        if (!searchParams.has('pageSize')) {
            setSearchParams({ page: searchParams.get('page') || '1', pageSize: '10' })
        }
    }, [ searchParams ])

    const columns = [
        BaseInputColumn({
            title: '№',
            dataIndex: 'uid',
            filterFunction: item => ({
                text: item.uid,
                value: item.uid
            })
        }),
        BaseInputColumn({
            title: 'ФИО',
            dataIndex: 'personFullName',
        }),
        BaseDateColumn({
            title: 'Дата рождения',
            dataIndex: 'birthDate'
        }),
        BaseInputColumn({
            title: 'Cерия и номер паспорта',
            dataIndex: 'passportSeriesAndNumber',
        }),
        BaseDateColumn({
            title: 'Дата подключения',
            dataIndex: 'dateConnection'
        }),
        BaseSelectColumn({
            title: 'Статус агента',
            dataIndex: 'statusAgentName',
            pathToOptions: 'referencegroup',
            paramsForOptions: [
                { 'name': 'status-agent' }
            ]
        })
    ]
    return (<>
        <MainTable columns={ columns } path={ path } />
    </>)
}

export default AgentFLListPage
