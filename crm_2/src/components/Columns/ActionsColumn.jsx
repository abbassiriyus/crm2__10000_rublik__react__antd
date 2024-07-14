import { DeleteOutlined,EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ActionsColumn = ({ onView, onDelete }) => ({
  title: 'Действия',
  key: 'actions',
  render: (_, record) => (
    <span>
      <Button
        type="link"
        icon={<EyeOutlined />}
        onClick={() => onView(record)}
      />
      <Button
        type="link"
        danger
        icon={<DeleteOutlined />}
        onClick={() => onDelete(record)}
      />
    </span>
  ),
})

export default ActionsColumn
