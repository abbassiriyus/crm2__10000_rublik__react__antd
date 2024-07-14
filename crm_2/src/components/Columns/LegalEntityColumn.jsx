const LegalEntityColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Юридическое лицо',
  dataIndex: 'business',
  sorter: true,
  key: 'business',
  filterSearch: true,
  filters: [
    { text: 'Entity 1', value: 'Entity 1' },
    { text: 'Entity 2', value: 'Entity 2' },
    { text: 'Entity 3', value: 'Entity 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'business',
    title: 'Юридическое лицо',
    handleSave,
  }) : undefined,
})

export default LegalEntityColumn
