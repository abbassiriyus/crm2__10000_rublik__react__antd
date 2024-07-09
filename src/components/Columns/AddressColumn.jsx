import BaseInputColumn from './BaseInputColumn.jsx'

function AddressColumn(filters = []) {
  return BaseInputColumn({
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
    filters: filters
  })
}

export default AddressColumn
