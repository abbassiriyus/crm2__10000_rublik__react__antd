import MainTable from '../../components/MainTable/MainTable.jsx'
import {useGetSelectsQuery} from '../../store/api/mainApi.js'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'

const BankListPage = () => {

    const {
        data: selectData = [],
    } = useGetSelectsQuery({
        path: 'bank/list'
    })

    const [searchParams, setSearchParams] = useSearchParams();
    const [selectFilterByName, setSelectFilterByName] = useState([])
    const [selectFilterByBic, setSelectFilterByBic] = useState([])

    function prepareSelect(data) {
        if (data === undefined || data.data === undefined) {
            return {}
        }
        setSelectFilterByName(data.data.map(m => ({
            text: m.name,
            value: m.id
        })))
        setSelectFilterByBic(data.data.map(m => ({
            text: m.bic,
            value: m.id
        })))
    }

    useEffect(() => {
        prepareSelect(selectData)
        if (!searchParams.has('pageSize')) {
            setSearchParams({page: searchParams.get('page') || '1', pageSize: '10'});
        }
    }, [selectData, searchParams])


// Конфигурация колонок
    const columns = [{
        title: 'Наименование',
        dataIndex: 'name',
        sorter: true,
        filters: selectFilterByName,
    }, {
        title: 'БИК',
        dataIndex: 'bic',
        sorter: true,
        filters: selectFilterByBic,
    },]
    return (<>
        <MainTable columns={columns} path={'bank'}/>
    </>)
}

export default BankListPage
