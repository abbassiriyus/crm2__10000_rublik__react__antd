import { useEffect, useState } from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, List, Row, Space, Typography } from 'antd'
import PropTypes, { func, object, string } from 'prop-types'
import { useDeleteRowMutation } from '../../store/api/mainApi'
import InputText from '../InputText/InputText.jsx'

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const InputTextRowList = ({
    rowSpan,
    colSpan,
    title,
    listName,//Ключ списка откуда брать значения.
    isEditMode,
    record,
    handleSave,
    required,
    requiredMessage,
    entityId,//Название поля откуда брать ID основной сущности
    relationId = 'id',//Название поля откуда брать ID связанной сущности, например для связи ManyToMany
    tableName,//Название таблицы для сохранения/обновления данных по листу
    itemName,//Название поля откуда брать значение, упомянутый ранее как "dataIndex"
    dbFieldName = itemName,
    path,//Путь на endpoint для удаления сущности из списка
    setStatus
}) => {

    const [data, setData] = useState(record[listName])
    const [deleteRow] = useDeleteRowMutation()
    useEffect(() => {
        setData(record[listName])
    }, [record])

    const renderedListItem = (item, index) => {
        if (isEditMode) {
            return <List.Item>
                <InputText
                    isFormItem={false}
                    rules={[{
                        required: required | true,
                        message: requiredMessage | 'Необходимо заполнить поле'
                    }]}
                    dataIndex={itemName}
                    record={data[index]}
                    save={handleSave}
                    entityId={entityId}
                    tableName={tableName}
                    dbFieldName={dbFieldName}
                    parametersForSave={{
                        'id': data[index][entityId],
                        'tableName': tableName,
                        'dbFieldName': dbFieldName,
                        'relationId': record[relationId],
                        'listName': listName
                    }}
                />
                <Button
                    shape="circle"
                    size={'small'}
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
                            try {
                                deleteRow({ 'path': path, 'id': id })
                                setStatus(1)
                            } catch (err) {
                                setStatus(-1)
                            }
                        }
                    }}
                />
            </List.Item>
        } else {
            return <List.Item>
                {item[itemName]}
            </List.Item>
        }
    }

    function addRow() {
        setData(prevData => [...prevData, { [entityId]: '', [itemName]: '' }])
    }

    return (
        <>
            <Row gutter={rowSpan | 16}>
                <Col span={colSpan | 24}>
                    <Space>
                        <Title level={5}>{title}</Title>
                    </Space>
                    <List
                        footer={
                            isEditMode ?
                                <Button
                                    tooltip={<div>Documents</div>}
                                    shape="circle"
                                    icon={<PlusOutlined />}
                                    disabled={!isEditMode}
                                    onClick={addRow}
                                />
                                : null
                        }
                        bordered={true}
                        dataSource={data}
                        renderItem={renderedListItem}
                        rowKey={item => item?.[entityId]}
                    />
                </Col>
            </Row>
        </>
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
    title: string,
    record: object,
    handleSave: func,
    entityId: string,
    relationId: string,
    tableName: string,
    dbFieldName: string,
    path: string,
    setStatus: func,
    rowData: object
}

export default InputTextRowList