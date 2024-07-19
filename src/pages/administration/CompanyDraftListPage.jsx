import BaseDateColumn from '../../components/Columns/BaseDateColumn.jsx'
import BaseInputColumn from '../../components/Columns/BaseInputColumn.jsx'
import MainTable from '../../components/MainTable/MainTable.jsx'

const CompanyDraftListPage = () => {

  const columns = [
    BaseInputColumn({
      title: 'ID',
      dataIndex: 'id',
      pathToSave: 'company',
      editable: false
    }),
    BaseInputColumn({
      title: 'Юр лицо',
      dataIndex: 'nameLegal',
      pathToSave: 'company',
      editable: false,
    }),
    BaseInputColumn({
      title: 'Адрес',
      dataIndex: 'addressLegal',
      pathToSave: 'company',
      editable: false,
    }),
    BaseDateColumn({
      title: 'Дата подключения',
      dataIndex: 'dateConnect',
      pathToSave: 'company',
      editable: false
    })
  ]
  return (<MainTable columns={columns} path={'company'} />)
}

export default CompanyDraftListPage