const StatusChangeDateColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Дата изменения статуса',
  dataIndex: 'statusChangeDate',
  sorter: true,
  key: 'statusChangeDate',
  filterSearch: true,
  filters: [
    { text: 'Date 1', value: 'Date 1' },
    { text: 'Date 2', value: 'Date 2' },
    { text: 'Date 3', value: 'Date 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'statusChangeDate',
    title: 'Дата изменения статуса',
    handleSave,
  }) : undefined,
})

export default StatusChangeDateColumn
