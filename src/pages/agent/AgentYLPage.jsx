import DateSelectRow from '../../components/DateSelect/DateSelectRow'
import InfoTable from '../../components/InfoTable/InfoTable.jsx'
import InputSelectRow from '../../components/InputSelect/InputSelectRow'
import InputTextRow from '../../components/InputText/InputTextRow'
import InputTextRowList from '../../components/InputTextList/InputTextRowList'
import BaseTab from '../../components/Tabs/BaseTab'
import InnerTabs from '../../components/Tabs/InnerTabs'
import AgentConditions from './AgentConditions.jsx'

const requisiteTableName = 'requisites',
    requisiteId = 'requisiteId',

    personBossTableName = 'persons',
    personBossId = 'personBossId',

    emailsTableName = 'emails',
    emailId = 'emailId',

    phonesTableName = 'phones',
    phoneId = 'phoneId',

    agentConditionTable = 'agent_conditions',
    agentConditionId = 'agentConditionId'

const metadata = [
    BaseTab('Общая информация',
        <InputSelectRow
            name={'companyTypeId'} title={'Организационно-правовая форма'}
            selectPath={'referencegroup'} dbFieldName={'company_type_id'}
            selectParams={[{ 'name': 'company_types' }]}
        />,
        <InputTextRow
            name={'nameLegal'} title={'Юридическое лицо'} required={true}
            requiredMessage={'Введите наименование'} dbFieldName={'name_legal'}
        />,
        <InputSelectRow
            name={'brandId'} title={'Бренд'}
            selectPath={'brand/list'} dbFieldName={'brand_id'}
        />,
        <InputTextRow
            name={'addressLegal'} title={'Юридический адрес'} required={true}
            requiredMessage={'Введите наименование'} dbFieldName={'address_legal'}
        />,

        <InputTextRow
            name={'address'} title={'Фактический адрес'} required={true}
            requiredMessage={'Введите наименование'}
        />,

        <InputSelectRow
            name={'settlementId'} title={'Населённый пункт'}
            selectParams={[{ 'name': 'settlement' }]} selectPath={'referencegroup'}
            dbFieldName={'settlement_id'}
        />,
        <InputSelectRow
            name={'statusAgentId'} title={'Статус агента'}
            selectParams={[{ 'name': 'status-agent' }]} selectPath={'referencegroup'}
            dbFieldName={'status_agent_id'}
        />,
        <DateSelectRow
            name={'dateConnection'} title={'Дата подключения'} dateFormat={'DD.MM.YYYY'}
            displayOnly={true}
        />,
        <InputTextRow name={'personCuratorFullName'} title={'Сотрудник ВД'} displayOnly={true} />,
    ),
    BaseTab('Реквизиты',
        <InputTextRow
            name={'ogrn'} title={'ОГРН'} tableName={requisiteTableName} entityId={requisiteId}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'inn'} title={'ИНН'} tableName={requisiteTableName} entityId={requisiteId}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'kpp'} title={'КПП'} tableName={requisiteTableName} entityId={requisiteId}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'raccount'} title={'Р/С'} tableName={requisiteTableName} entityId={requisiteId}
            dbFieldName={'r_account'} required={true} requiredMessage={'Введите наименование'}
        />,
        <InputSelectRow
            name={'bankId'} title={'Банк для оплаты'} tableName={requisiteTableName}
            entityId={requisiteId} selectPath={'bank/list'} dbFieldName={'bank_id'}
        />,
        <InputTextRow
            name={'okpo'} title={'ОКПО'} tableName={requisiteTableName} entityId={requisiteId}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'okato'} title={'ОКАТО'} tableName={requisiteTableName} entityId={requisiteId}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'ndog'} title={'Номер договора'} tableName={requisiteTableName}
            entityId={requisiteId} dbFieldName={'n_dog'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <DateSelectRow
            name={'dateDog'} title={'Дата договора'} dateFormat={'DD.MM.YYYY'}
            dbFieldName={'date_dog'}
        />
    ),
    BaseTab('Руководитель',
        <InputTextRow
            name={'personBossLastName'} title={'Фамилия'} tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'last_name'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'personBossFirstName'} title={'Имя'} tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'first_name'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'personBossPatronymic'} title={'Отчество'} tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'patronymic'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <DateSelectRow
            name={'personBossBirthDate'} title={'Дата рождения'} dateFormat={'DD.MM.YYYY'}
            dbFieldName={'birth_date'}
        />,
        <InputTextRow
            name={'personBossPassportSeries'} title={'Паспорт серия'} tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'passport_series'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'personBossPassportNumber'} title={'Паспорт номер'} tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'passport_number'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <InputTextRow
            name={'personBossPassportIssuer'} title={'Кем выдан паспорт'}
            tableName={personBossTableName}
            entityId={personBossId} dbFieldName={'passport_issuer'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <DateSelectRow
            name={'personBossPassportIssueDate'} title={'Дата выдачи паспорта'}
            dateFormat={'DD.MM.YYYY'} dbFieldName={'passport_issue_date'}
        />,
        <InputTextRowList
            title={'Email руководителя'} listName={'personBossEmails'} itemName={'email'}
            entityId={emailId} tableName={emailsTableName} path={'email'}
            relationId={personBossId}
        />,
        <InputTextRowList
            title={'Телефон руководителя'} listName={'personBossPhones'} itemName={'phone'}
            entityId={phoneId} tableName={phonesTableName} path={'phone'}
            relationId={personBossId}
        />
    ),
    BaseTab('Условия сотрудничества',
        <InnerTabs
            label={'УС №'}
            path={'agent_conditions'}
            entityId={agentConditionId}
            tableName={agentConditionTable}
            listName={'agentConditions'}
            components={[
                <AgentConditions key={'AgentConditions'} />
            ]}
            additionalParamsForAdd={{ 'agentIdFieldName': 'agentyl_id', 'tableName': agentConditionTable }}
        />
    ),
    BaseTab('Контакты',
        <InputTextRowList
            title={'Телефоны'} listName={'phones'} itemName={'phone'}
            entityId={phoneId} tableName={phonesTableName} path={'phone'}
        />,
        <InputTextRowList
            title={'E-mails'} listName={'emails'} itemName={'email'}
            entityId={emailId} tableName={emailsTableName} path={'email'}
        />,
        <InputTextRow
            name={'comment'} title={'Комментарий'}
            required={true} requiredMessage={'Введите наименование'}
        />
    )
]

const AgentYLPage = () => {
    return (<>
        <InfoTable path={'agentyl'} metadata={metadata} />
    </>)
}

export default AgentYLPage
