const StatusColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Статус',
  dataIndex: 'status',
  sorter: true,
  key: 'status',
  filterSearch: true,
  filters: [
    { text: 'Status 1', value: 'Status 1' },
    { text: 'Status 2', value: 'Status 2' },
    { text: 'Status 3', value: 'Status 3' },
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

export default StatusColumn
