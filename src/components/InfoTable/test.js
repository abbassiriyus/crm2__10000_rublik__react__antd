import DateSelect from '../DateSelect/DateSelect.jsx'
import InputSelect from '../InputSelect/InputSelect.jsx'
import InputText from '../InputText/InputText.jsx'

const columns = [
    {
        title: 'ФИО клиента',
        dataIndex: 'fio',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    rules={[{required: true, message: 'Необходимо заполнить поле'}]}
                    displayMode={!isEditMode}
                    dataIndex="fio"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Наименование',
        dataIndex: 'name',
        render: (text, record, index) => {
            return (
                <InputText
                    rules={[{required: true, message: 'Необходимо заполнить поле'}]}
                    displayMode={!isEditMode}
                    dataIndex="name"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: '№ кредитного договора',
        dataIndex: 'agreementNumber',
        render: (text, record, index) => {
            return (
                <InputText
                    rules={[{required: true, message: 'Необходимо заполнить поле'}]}
                    displayMode={!isEditMode}
                    dataIndex="agreementNumber"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Тип',
        dataIndex: 'type',
        render: (text, record, index) => {
            return (
                <InputSelect
                    displayMode={!isEditMode}
                    options={selectData}
                    loading={selectIsLoading}
                    record={record}
                    dataIndex="type"
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Сумма кредита',
        dataIndex: 'sum',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    rules={[{required: true, message: 'Необходимо заполнить поле'}]}
                    displayMode={!isEditMode}
                    dataIndex="sum"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Выплачено',
        dataIndex: 'completed',
        width: '40px',
        render: (text, record, index) => {
            return (
                <InputSelect
                    rules={[{required: true, message: 'Необходимо заполнить поле'}]}
                    displayMode={!isEditMode}
                    allowClear={false}
                    options={[
                        {
                            id: 'true',
                            value: 'Да'
                        },
                        {
                            id: 'false',
                            value: 'Нет'
                        }
                    ]}
                    loading={selectIsLoading}
                    isFormItem
                    record={record}
                    dataIndex="completed"
                />
            )
        },
    },
    {
        title: 'Заявление на возврат',
        dataIndex: 'statement',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    displayMode={!isEditMode}
                    dataIndex="statement"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Дата перечисления в ТО',
        dataIndex: 'date',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <DateSelect
                    displayMode={!isEditMode}
                    date={text}
                    record={record}
                    dataIndex="date"
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Детали #1',
        dataIndex: 'fieldDetails1',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    displayMode={!isEditMode}
                    dataIndex="fieldDetails1"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Детали #2',
        dataIndex: 'fieldDetails2',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    displayMode={!isEditMode}
                    dataIndex="fieldDetails2"
                    record={record}
                    isFormItem
                />
            )
        },
    },
    {
        title: 'Детали #3',
        dataIndex: 'fieldDetails3',
        width: '16.7%',
        render: (text, record, index) => {
            return (
                <InputText
                    displayMode={!isEditMode}
                    dataIndex="fieldDetails3"
                    record={record}
                    isFormItem
                />
            )
        },
    },
]
