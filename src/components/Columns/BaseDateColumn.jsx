import { useState } from 'react'
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, DatePicker } from 'antd'
import { useUpdateRowMutation } from '../../store/api/mainApi'
import DateSelect from '../DateSelect/DateSelect'

const BaseDateColumn = ({
    title,
    dataIndex,
    key,
    pathForSave,
    sorter = true,
    editable = false,
    filterFunction = (m => ({
        text: m.name,
        value: m.id
    }))
}) => {
    const [data, setData] = useState(undefined)
    const [updateRow] = useUpdateRowMutation()

    const handleSearch = (selectedKeys, confirm) => {
        confirm()
        if (selectedKeys === undefined || selectedKeys.length === 0) {
            return {}
        }
        setData(selectedKeys.map(filterFunction))
    }

    function handleSave(row) {
        row.path = pathForSave
        updateRow(row)
    }

    return {
        title: title,
        dataIndex: dataIndex,
        key: key || dataIndex,
        sorter: sorter,
        filters: data,
        render: (text, record) => {
            return (
                <DateSelect
                    date={text}
                    record={record}
                    save={handleSave}
                    dataIndex={dataIndex}
                    displayMode={!editable}
                />
            )
        },
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm
        }) => (
            <div style={{ padding: 8, maxWidth: 300 }}>
                <DatePicker.RangePicker
                    onChange={
                        dates => {
                            const [start, end] = dates || []
                            setSelectedKeys(start && end ? [start.format('YYYY-MM-DDTHH:mm:ss'), end.format('YYYY-MM-DDTHH:mm:ss')]
                                : [])
                            setData(dates ? [start, end] : undefined)
                        }
                    }
                    style={{ width: '100%', }}
                />
                <Button
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    icon={<SearchOutlined />}
                    type="primary"
                    size="small"
                    style={{
                        marginTop: 10,
                        width: 276,
                    }}
                >
                    Поиск
                </Button>
            </div>
        ),
        filterIcon: <CalendarOutlined />,
    }
}

export default BaseDateColumn