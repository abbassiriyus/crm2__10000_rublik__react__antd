import { Col, Row, Space, Typography } from 'antd'
import { any, array, bool, func, object, string } from 'prop-types'
import DateSelectRow from '../../components/DateSelect/DateSelectRow.jsx'
import InputTextNumber from '../../components/InputNumber/InputTextNumber.jsx'

const agentConditionTable = 'agent_conditions',
    agentConditionId = 'agentConditionId'

const { Title } = Typography

const gridStyle = { textAlign: 'center', }
const AgentConditions = ({
    record,
    isEditMode,
    handleSave,
    isLoading,
    tabIndex
}) => (
    <div>
        <div style={{ marginBottom: 10 }}>
            <DateSelectRow
                handleSave={handleSave} selectIsLoading={isLoading} record={record} isEditMode={isEditMode}
                name={'conditionDate'} title={'Дата условий'} dateFormat={'DD.MM.YYYY'} tableName={agentConditionTable}
                entityId={agentConditionId} dbFieldName={'condition_date'}
            />
        </div>
        <Space />
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '15px', marginBottom: 10 }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Space style={gridStyle} />
                </Col>
                <Col span={8}>
                    <Title level={5} style={gridStyle}>{'Размер КВ, %'}</Title>
                </Col>
                <Col span={8}>
                    <Title level={5} style={gridStyle}>{'Размер КВ, руб'}</Title>
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Объём продаж'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'volumeSellPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'volume_sell_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'volumeSell'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'volume_sell'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Объём продаж (без доп услуг)'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'volumeSellWithoutDopPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'volume_sell_without_dop_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'volumeSellWithoutDop'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'volume_sell_without_dop'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'За каждый выданный кредит'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'creditGivenPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'credit_given_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'creditGivenAmount'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'credit_given_amount'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Доп услуги'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServicesPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_services_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServices'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_services'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Доп услуги (смс)'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServiceSmsPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_service_sms_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServiceSms'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_service_sms'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Доп услуги (страхование)'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServiceInsurancePercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_service_insurance_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'dopServiceInsurance'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'dop_service_insurance'}
                        suffix={'₽'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
        </div>
        <Space />
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '15px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Title level={5} style={gridStyle}>{'Наименование банка'}</Title>
                </Col>
                <Col span={8}>
                    <Title level={5} style={gridStyle}>{'Размер КВ, %'}</Title>
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Альфа Банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'alfaPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'alfa_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Кредит Европа Банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'creditEuropePercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'credit_europe_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'МТС Банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'mtsPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'mts_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'ОТП Банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'otpPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'otp_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Совкомбанк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'sofcomPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'sofcom_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Тинькофф банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'tinkoffPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'tinkoff_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Почта банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'pochtaPercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'pochta_percent'}
                        suffix={'%'}
                        tabIndex={tabIndex}
                        inputNumberStyle={{ width: 150 }}
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingBottom: 10 }}>
                <Col span={8}>
                    {'Ренессанс кредит банк'}
                </Col>
                <Col span={8}>
                    <InputTextNumber
                        displayMode={!isEditMode}
                        dataIndex={'renesancePercent'}
                        record={record}
                        isFormItem={false}
                        save={handleSave}
                        entityId={agentConditionId}
                        tableName={agentConditionTable}
                        dbFieldName={'renesance_percent'}
                        suffix={'%'}
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