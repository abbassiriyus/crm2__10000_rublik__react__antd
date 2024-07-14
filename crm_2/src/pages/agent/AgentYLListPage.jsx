import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BaseDateColumn from '../../components/Columns/BaseDateColumn'
import BaseInputColumn from '../../components/Columns/BaseInputColumn'
import BaseSelectColumn from '../../components/Columns/BaseSelectColumn'
import MainTable from '../../components/MainTable/MainTable.jsx'

const AgentYLListPage = () => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    const path = 'agentyl'

    useEffect(() => {
        if (!searchParams.has('pageSize')) {
            setSearchParams({ page: searchParams.get('page') || '1', pageSize: '10' })
        }
    }, [ searchParams ])

    // Конфигурация колонок
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
            title: 'Юридическое лицо',
            dataIndex: 'nameLegal',
            filterFunction: item => ({
                text: item.name_legal,
                value: item.name_legal
            })
        }),
        BaseSelectColumn({
            title: 'Бренд',
            dataIndex: 'brandName',
            pathToOptions: 'brand/list'
        }),
        BaseInputColumn({
            title: 'Населенный пункт',
            dataIndex: 'settlementName',
        }),
        BaseInputColumn({
            title: 'Фактический адрес',
            dataIndex: 'address',
            filterFunction: item => ({
                text: item.address,
                value: item.address
            })
        }),
        BaseDateColumn({
            title: 'Дата подключения',
            dataIndex: 'dateConnection',
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

export default AgentYLListPage
