const RecordNumberColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: '№ записи',
  dataIndex: 'recordNumber',
  sorter: true,
  key: 'recordNumber',
  filterSearch: true,
  filters: [
    { text: 'Value 1', value: 'Value 1' },
    { text: 'Value 2', value: 'Value 2' },
    { text: 'Value 3', value: 'Value 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'address',
    title: 'Адрес',
    handleSave,
  }) : undefined,
})

export default RecordNumberColumn
