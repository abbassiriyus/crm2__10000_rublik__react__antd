import { Col, Row, Typography } from 'antd'
import PropTypes from 'prop-types'
import InputText from './InputText.jsx'

const { Title } = Typography

const InputTextRow = ({
    rowSpan = 16,
    colSpan = 24,
    title = '',
    name,
    isEditMode = false,
    record = {},
    handleSave = () => { },
    required = false,
    requiredMessage = 'Необходимо заполнить поле',
    entityId = '',
    tableName = '',
    dbFieldName = '',
    isFormItem = true
}) => {
    return (
        <Row gutter={rowSpan}>
            <Col span={colSpan}>
                <Title level={5}>{title}</Title>
                <InputText
                    rules={[{
                        required: required,
                        message: requiredMessage
                    }]}
                    displayMode={!isEditMode}
                    dataIndex={name}
                    record={record}
                    isFormItem={isFormItem}
                    save={handleSave}
                    entityId={entityId}
                    tableName={tableName}
                    dbFieldName={dbFieldName}
                />
            </Col>
        </Row>
    )
}

InputTextRow.propTypes = {
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    name: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
    title: PropTypes.string,
    record: PropTypes.object,
    handleSave: PropTypes.func,
    entityId: PropTypes.string,
    tableName: PropTypes.string,
    dbFieldName: PropTypes.string,
    isFormItem: PropTypes.bool
}

export default InputTextRow
