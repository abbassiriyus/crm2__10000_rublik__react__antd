const SegmentColumn = ({ onFilter, editable, handleSave, ...rest }) => ({
  title: 'Сегмент',
  dataIndex: 'segment',
  sorter: true,
  key: 'segment',
  filterSearch: true,
  filters: [
    { text: 'Segment 1', value: 'Segment 1' },
    { text: 'Segment 2', value: 'Segment 2' },
    { text: 'Segment 3', value: 'Segment 3' },
  ],
  onFilter,
  ...rest,
  onCell: editable ? (record) => ({
    record,
    editable,
    dataIndex: 'segment',
    title: 'Сегмент',
    handleSave,
  }) : undefined,
})

export default SegmentColumn
