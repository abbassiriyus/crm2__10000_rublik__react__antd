import MainTable from '../components/MainTable/MainTable.jsx'
import InputSelect from '../components/InputSelect/InputSelect.jsx'
import DateSelect from '../components/DateSelect/DateSelect.jsx'

const HomePage = () => {
// Конфигурация колонок
    const columns = [
        {
            title: 'ФИО клиента',
            dataIndex: 'fio',
            sorter: true,
            width: '16.7%',
            editable: true,
        },
        {
            title: 'Наименование',
            dataIndex: 'name',
            sorter: true,
            editable: true,
        },
        {
            title: '№ кредитного договора',
            dataIndex: 'agreementNumber',
            sorter: true,
        },
        {
            title: 'Тип',
            dataIndex: 'type',
            sorter: true,
            render: (text, record, handleSave) => {
                return (
                    <InputSelect
                        options={MainTable.selectData}
                        loading={MainTable.selectIsLoading}
                        record={record}
                        save={handleSave}
                        dataIndex="type"
                    />
                )
            },
        },
        {
            title: 'Сумма кредита',
            dataIndex: 'sum',
            sorter: true,
            width: '16.7%',
        },
        {
            title: 'Выплачено',
            dataIndex: 'completed',
            sorter: true,
            width: '40px',
            render: el => el === 'true' ? 'Да' : 'Нет',
            filters: [
                {text: 'Да', value: 'true'},
                {text: 'Нет', value: 'false'},
            ],
        },
        {
            title: 'Заявление на возврат',
            dataIndex: 'statement',
            sorter: true,
            width: '16.7%',
            editable: true,
        },
        {
            title: 'Дата перечисления в ТО',
            dataIndex: 'date',
            sorter: true,
            width: '16.7%',
            render: (text, record, handleSave) => {
                return (
                    <DateSelect
                        date={text}
                        record={record}
                        save={handleSave}
                        dataIndex="date"
                    />
                )
            },
        },
    ]
    return (
        <div>
            <MainTable columns={columns} path={"reference"}/>
        </div>
    )
}

export default HomePage
