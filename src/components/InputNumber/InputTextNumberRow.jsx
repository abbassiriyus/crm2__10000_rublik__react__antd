import { Col, Row, Typography } from 'antd'
import PropTypes, { bool, func, number, object, string } from 'prop-types'
import InputTextNumber from './InputTextNumber'

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const InputTextNumberRow = ({
    rowSpan,
    colSpan,
    title,
    name,
    isEditMode,
    record,
    handleSave,
    required,
    requiredMessage,
    entityId,
    tableName,
    dbFieldName,
    isFormItem,
    min,
    max,
    step,
    prefix,
    tabIndex
}) => {
    return (
        <>
            <Row gutter={rowSpan | 16}>
                <Col span={colSpan | 24}>
                    <Title level={5}>{title}</Title>
                    <InputTextNumber
                        rules={[{
                            required: required | true,
                            message: requiredMessage | 'Необходимо заполнить поле'
                        }]}
                        displayMode={!isEditMode}
                        dataIndex={name}
                        record={record}
                        isFormItem={isFormItem}
                        save={handleSave}
                        entityId={entityId}
                        tableName={tableName}
                        dbFieldName={dbFieldName}
                        min={min}
                        max={max}
                        step={step}
                        prefix={prefix}
                        tabIndex={tabIndex}
                    />
                </Col>
            </Row>
        </>
    )
}

InputTextNumberRow.propTypes = {
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    name: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
    title: string,
    record: object,
    handleSave: func,
    entityId: string,
    tableName: string,
    dbFieldName: string,
    isFormItem: bool,
    min: number,
    max: number,
    step: number,
    prefix: string,
    tabIndex: string
}

export default InputTextNumberRow