const SettlementColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Населенный пункт',
  dataIndex: 'settlement',
  sorter: true,
  key: 'settlement',
  filterSearch: true,
  filters: [
    { text: 'Settlement 1', value: 'Settlement 1' },
    { text: 'Settlement 2', value: 'Settlement 2' },
    { text: 'Settlement 3', value: 'Settlement 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'settlement',
    title: 'Населенный пункт',
    handleSave,
  }) : undefined,
})

export default SettlementColumn
