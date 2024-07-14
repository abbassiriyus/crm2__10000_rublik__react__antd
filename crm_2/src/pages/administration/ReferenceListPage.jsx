import MainTable from '../../components/MainTable/MainTable.jsx'
import BaseInputColumn from '../../components/Columns/BaseInputColumn.jsx'
import BaseSelectColumn from '../../components/Columns/BaseSelectColumn.jsx'

const ReferenceListPage = () => {

// Конфигурация колонок
    const columns = [
        BaseInputColumn({
            title: 'Наименование',
            dataIndex: 'name',
            pathToSave: 'reference',
            editable: true
        }),

        BaseSelectColumn({
            title: 'Наименование группы',
            dataIndex: 'groupId',
            key: 'groupName',
            pathToOptions: 'referencegroup/list',
            pathToSave: 'reference',
            editable: true
        })
    ]
    return (<MainTable columns={columns} path={'reference'}/>)
}

export default ReferenceListPage
