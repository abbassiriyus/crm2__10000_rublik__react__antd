const CommentsColumn = (filters: [], editable: boolean = true) => BaseInputColumn({
  title: 'Комментарии',
  dataIndex: 'comments',
  key: 'comments',
  filters: filters,
  editable: editable
})

export default CommentsColumn
