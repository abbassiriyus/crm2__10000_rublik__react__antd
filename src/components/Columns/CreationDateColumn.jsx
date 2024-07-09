const CreationDateColumn = (filters = [], editable = true) => BaseDateColumn({
  title: 'Дата создания записи',
  dataIndex: 'creationDate',
  key: 'creationDate',
  filters: filters,
  editable: editable
})
export default CreationDateColumn
