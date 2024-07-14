import { Col, Row, Typography } from 'antd'
import PropTypes, { bool, func, object, string } from 'prop-types'
import InputText from './InputText.jsx'

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const InputTextRow = ({
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
    isFormItem
}) => {
    return (
        <>
            <Row gutter={ rowSpan | 16 }>
                <Col span={ colSpan | 24 }>
                    <Title level={ 5 }>{ title }</Title>
                    <InputText
                        rules={ [ {
                            required: required | true,
                            message: requiredMessage | 'Необходимо заполнить поле'
                        } ] }
                        displayMode={ !isEditMode }
                        dataIndex={ name }
                        record={ record }
                        isFormItem={ isFormItem }
                        save={ handleSave }
                        entityId={ entityId }
                        tableName={ tableName }
                        dbFieldName={ dbFieldName }
                    />
                </Col>
            </Row>
        </>
    )
}

InputTextRow.propTypes = {
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
    isFormItem: bool
}

export default InputTextRow