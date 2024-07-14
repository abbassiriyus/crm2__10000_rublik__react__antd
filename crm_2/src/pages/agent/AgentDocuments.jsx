import { Col, Row, Space, Typography } from 'antd'
import { any, array, bool, func, object, string } from 'prop-types'
import DateSelect from '../../components/DateSelect/DateSelect.jsx'
import InputText from '../../components/InputText/InputText.jsx'

const personsTable = 'persons',
    personId = 'personId'

const { Title } = Typography

const gridStyle = { textAlign: 'center', }
const textCenterStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
const AgentConditions = ({
    record,
    isEditMode,
    handleSave,
    isLoading,
    tabIndex
}) => (
    <div>
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '15px', marginBottom: 10, padding: '10px' }}>
            <Row gutter={8}>
                <Col span={24}>
                    <Title level={4} style={gridStyle}>{'Паспортные данные'}</Title>
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={textCenterStyle}>
                    {'Паспорт серия'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'passportSeries'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'passport_series'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={textCenterStyle}>
                    {'Паспорт номер'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'passportNumber'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'passport_number'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={textCenterStyle}>
                    {'Кем выдан паспорт'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'passportIssuer'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'passport_issuer'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={textCenterStyle}>
                    {'Дата выдачи паспорта'}
                </Col>
                <Col span={12}>
                    <DateSelect
                        loading={isLoading}
                        record={record}
                        save={handleSave}
                        dataIndex={'passportIssueDate'}
                        displayMode={!isEditMode}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'passport_issue_date'}
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12} style={textCenterStyle}>
                    {'Код подразделения'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'passportIssuerDivisionCode'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'passport_issuer_division_code'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
        </div>
        <Space />
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '15px', marginBottom: 10, padding: '10px' }}>
            <Row gutter={16}>
                <Col span={24}>
                    <Title level={4} style={gridStyle}>{'Адрес'}</Title>
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={textCenterStyle}>
                    {'Регистрации'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'addressRegistration'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'address_registration'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} >
                <Col span={12} style={textCenterStyle}>
                    {'Фактический'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'addressActual'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'address_actual'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
        </div>
        <Space />
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '15px', marginBottom: 10, padding: '10px' }}>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {'ИНН'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'inn'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={'requisiteId'}
                        tableName={'requisites'}
                        dbFieldName={'inn'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} >
                <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {'СНИЛС'}
                </Col>
                <Col span={12}>
                    <InputText
                        displayMode={!isEditMode}
                        dataIndex={'snils'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={personId}
                        tableName={personsTable}
                        dbFieldName={'snils'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
        </div>
    </div>
)

AgentConditions.propTypes = {
    record: object,
    listName: string,
    labelField: string,
    keyField: string,
    components: array,
    closable: bool,
    isEditMode: bool,
    rowData: object,
    handleSave: func,
    setStatus: any,
    formRef: any,
    isLoading: bool,
    isNew: bool,
    tabIndex: string
}

export default AgentConditions