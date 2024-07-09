import InputSelect from '../InputSelect/InputSelect.jsx'
import BaseInputColumn from './BaseInputColumn.jsx'

const BrandColumn = (filters = [], editable = true) => BaseInputColumn({
  title: 'Бренд',
  dataIndex: 'brand',
  key: 'brand',
  filters: filters,
  render: editable ? (text, record) => (
    <InputSelect
      options={options}
      loading={isLoading}
      record={record}
      save={(newData) => handleSave({
        ...record,
        brand: newData
      })}
      dataIndex="brand"
    />
  ) : text,
})

export default BrandColumn
