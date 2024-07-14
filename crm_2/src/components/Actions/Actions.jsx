import { Link } from 'react-router-dom'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import './style.css'

const Actions = ({
    deleteRow,
    openRowInfo,
    record
}) => {

    function handleDelete() {
        deleteRow(record)
    }

    function handleOpenInfo() {
        openRowInfo(record)
    }

    return (
        <div className="actions">
          <Link to={`${record.id}`}>
                <Button
                    type="primary"
                    size="small"
                    shape="default"
                    onClick={handleOpenInfo}
                    icon={<EyeOutlined/>}
                />
            </Link>
            <Button
                type="primary"
                size="small"
                shape="default"
                onClick={handleDelete}
                icon={<DeleteOutlined/>}
            />
        </div>
    )
}

export default Actions
