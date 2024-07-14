const TrademarkColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'ТМ',
  dataIndex: 'tm',
  sorter: true,
  key: 'tm',
  filterSearch: true,
  filters: [
    { text: 'Trademark 1', value: 'Trademark 1' },
    { text: 'Trademark 2', value: 'Trademark 2' },
    { text: 'Trademark 3', value: 'Trademark 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'tm',
    title: 'ТМ',
    handleSave,
  }) : undefined,
})

export default TrademarkColumn
