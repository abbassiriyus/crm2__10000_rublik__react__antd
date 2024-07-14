const ROPColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'РОП',
  dataIndex: 'rop',
  sorter: true,
  key: 'rop',
  filterSearch: true,
  filters: [
    { text: 'ROP 1', value: 'ROP 1' },
    { text: 'ROP 2', value: 'ROP 2' },
    { text: 'ROP 3', value: 'ROP 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'ROP',
    title: 'РОП',
    handleSave,
  }) : undefined,
})

export default ROPColumn
