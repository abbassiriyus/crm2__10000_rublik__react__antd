import { useEffect, useState } from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, List, Row, Space, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useDeleteRowMutation } from '../../store/api/mainApi'
import InputText from '../InputText/InputText.jsx'

const { Title } = Typography

const InputTextRowList = ({
    rowSpan = 16,
    colSpan = 24,
    title = '',
    listName,
    isEditMode = false,
    record = {},
    handleSave = () => { },
    required = false,
    requiredMessage = 'Необходимо заполнить поле',
    entityId = 'id',
    relationId = 'id',
    tableName = '',
    itemName,
    dbFieldName = itemName,
    path = '',
    setStatus = () => { }
}) => {
    const [data, setData] = useState(record[listName] || [])
    const [deleteRow] = useDeleteRowMutation()

    useEffect(() => {
        setData(record[listName] || [])
    }, [record, listName])

    const renderedListItem = (item, index) => {
        if (!item) return null; // Check if item is defined

        return (
            <List.Item>
                {isEditMode ? (
                    <>
                        <InputText
                            isFormItem={false}
                            rules={[{
                                required: required,
                                message: requiredMessage
                            }]}
                            dataIndex={itemName}
                            record={item}
                            save={handleSave}
                            entityId={entityId}
                            tableName={tableName}
                            dbFieldName={dbFieldName}
                            parametersForSave={{
                                'id': item[entityId],
                                'tableName': tableName,
                                'dbFieldName': dbFieldName,
                                'relationId': record[relationId],
                                'listName': listName
                            }}
                        />
                        <Button
                            shape="circle"
                            size="small"
                            icon={<MinusOutlined />}
                            style={{ right: -10 }}
                            onClick={() => {
                                setStatus(2)
                                const id = item[entityId]
                                if (!id) {
                                    const newData = [...data]
                                    newData.splice(index, 1)
                                    setData(newData)
                                } else {
                                    deleteRow({ 'path': path, 'id': id })
                                        .then(() => setStatus(1))
                                        .catch(() => setStatus(-1))
                                }
                            }}
                        />
                    </>
                ) : (
                    item[itemName]
                )}
            </List.Item>
        )
    }

    const addRow = () => {
        setData(prevData => [...prevData, { [entityId]: '', [itemName]: '' }])
    }

    return (
        <Row gutter={rowSpan}>
            <Col span={colSpan}>
                <Space>
                    <Title level={5}>{title}</Title>
                </Space>
                <List
                    footer={
                        isEditMode ? (
                            <Button
                                tooltip={<div>Documents</div>}
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={addRow}
                            />
                        ) : null
                    }
                    bordered
                    dataSource={data}
                    renderItem={renderedListItem}
                    rowKey={item => item?.[entityId] || ''}
                />
            </Col>
        </Row>
    )
}

InputTextRowList.propTypes = {
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    listName: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
    itemName: PropTypes.string.isRequired,
    title: PropTypes.string,
    record: PropTypes.object,
    handleSave: PropTypes.func,
    entityId: PropTypes.string,
    relationId: PropTypes.string,
    tableName: PropTypes.string,
    dbFieldName: PropTypes.string,
    path: PropTypes.string,
    setStatus: PropTypes.func
}

export default InputTextRowList
