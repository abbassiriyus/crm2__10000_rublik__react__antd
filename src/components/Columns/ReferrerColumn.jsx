const ReferrerColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Кто привлек',
  dataIndex: 'referrer',
  sorter: true,
  key: 'referrer',
  filterSearch: true,
  filters: [
    { text: 'Referrer 1', value: 'Referrer 1' },
    { text: 'Referrer 2', value: 'Referrer 2' },
    { text: 'Referrer 3', value: 'Referrer 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'referrer',
    title: 'Кто привлек',
    handleSave,
  }) : undefined,
})

export default ReferrerColumn
