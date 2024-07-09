import BaseInputColumn from './BaseInputColumn.jsx'

const NameColumn = ({ sorter }) => {
  return BaseInputColumn({
    title: 'Наименование',
    key: 'name',
    dataIndex: 'name',
    sorter: sorter
  })
}

export default NameColumn
