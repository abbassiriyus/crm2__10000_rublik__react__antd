import DateSelectRow from '../../components/DateSelect/DateSelectRow.jsx'
import InfoTable from '../../components/InfoTable/InfoTable.jsx'
import InputSelectRow from '../../components/InputSelect/InputSelectRow.jsx'
import InputTextRow from '../../components/InputText/InputTextRow.jsx'
import InputTextRowList from '../../components/InputTextList/InputTextRowList.jsx'
import BaseTab from '../../components/Tabs/BaseTab'
import InnerTabs from '../../components/Tabs/InnerTabs.jsx'
import AgentConditions from './AgentConditions.jsx'
import AgentDocuments from './AgentDocuments.jsx'

const requisiteTableName = 'requisites',
    requisiteId = 'requisiteId',

    emailsTableName = 'emails',
    emailId = 'emailId',

    phonesTableName = 'phones',
    phoneId = 'phoneId',

    agentConditionTable = 'agent_conditions',
    agentConditionId = 'agentConditionId'

const metadata = [
    BaseTab('Персональные данные',
        <InputTextRow
            name={'personLastName'} title={'Фамилия'} required={true}
            requiredMessage={'Введите наименование'} dbFieldName={'last_name'} tableName={'persons'}
            entityId={'personId'}
        />,
        <InputTextRow
            name={'personFirstName'} title={'Имя'} required={true}
            requiredMessage={'Введите наименование'} dbFieldName={'first_legal'} tableName={'persons'}
            entityId={'personId'}
        />,
        <InputTextRow
            name={'personPatronymic'} title={'Отчество'} required={true}
            requiredMessage={'Введите наименование'} dbFieldName={'patronymic'} tableName={'persons'}
            entityId={'personId'}
        />,
        <DateSelectRow
            name={'birthDate'} title={'Дата рождения'} dateFormat={'DD.MM.YYYY'} dbFieldName={'birth_date'}
            tableName={'persons'} entityId={'personId'}
        />,
        <DateSelectRow
            name={'dateConnection'} title={'Дата подключения'} dateFormat={'DD.MM.YYYY'}
            displayOnly={true}
        />,
        <InputSelectRow
            name={'statusAgentId'} title={'Статус агента'}
            selectParams={[{ 'name': 'status-agent' }]} selectPath={'referencegroup'}
            dbFieldName={'status_agent_id'}
        />,
        <InputTextRow name={'personCuratorFullName'} title={'Сотрудник ВД'} displayOnly={true} />,
    ),
    BaseTab('Документы',
        <AgentDocuments />
    ),
    BaseTab('Реквизиты',
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
            name={'ndog'} title={'Номер договора'} tableName={requisiteTableName}
            entityId={requisiteId} dbFieldName={'n_dog'}
            required={true} requiredMessage={'Введите наименование'}
        />,
        <DateSelectRow
            name={'dateDog'} title={'Дата договора'} dateFormat={'DD.MM.YYYY'}
            dbFieldName={'date_dog'}
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
            additionalParamsForAdd={{ 'agentIdFieldName': 'agentfl_id', 'tableName': agentConditionTable }}
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

const InfoPage = () => {
    return (<>
        <InfoTable path={'agentfl'} metadata={metadata} />
    </>)
}

export default InfoPage
