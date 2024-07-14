import { Col, Row, Typography } from 'antd'
import PropTypes, { bool, func, object, string } from 'prop-types'
import DateSelect from './DateSelect'

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const DateSelectRow = ({
    rowSpan,
    colSpan,
    title,
    name,
    isEditMode,
    record,
    handleSave,
    selectIsLoading,
    required,
    requiredMessage,
    dateFormat,
    entityId,
    tableName,
    dbFieldName
}) => {

    return (
        <>
            <Row gutter={ rowSpan | 16 }>
                <Col span={ colSpan | 24 }>
                    <Title level={ 5 }>{ title }</Title>
                    <DateSelect
                        loading={ selectIsLoading }
                        record={ record }
                        save={ handleSave }
                        dataIndex={ name }
                        displayMode={ !isEditMode }
                        dateFormat={ dateFormat }
                        entityId={ entityId }
                        tableName={ tableName }
                        dbFieldName={ dbFieldName }
                        rules={ [ {
                            required: required | true,
                            message: requiredMessage | 'Необходимо заполнить поле'
                        } ] }
                    />
                </Col>
            </Row>
        </>
    )
}

DateSelectRow.propTypes = {
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
    title: string,
    isEditMode: bool,
    record: object,
    handleSave: func,
    selectIsLoading: bool,
    dateFormat: string,
    entityId: string,
    tableName: string,
    dbFieldName: string
}

export default DateSelectRow