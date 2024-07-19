import MainTable from '../components/MainTable/MainTable.jsx'

const HomePage = () => {
    const columns = [
        {
            title: 'IDTT',
            dataIndex: 'idTT',
            sorter: true,
            editable: true,
        },
        {
            title: 'INN',
            sorter: true,
            dataIndex: 'inn',
            editable: true,
        },
        {
            title: 'yuridicheskoe litso',
            dataIndex: 'yuridicheskoeLitso',
            sorter: true,
        },
        {
            title: 'brend',
            dataIndex: 'brend',
            sorter: true,
        },
        {
            title: 'Naselenniy punkit',
            dataIndex: 'naselenniyPunkit',
            sorter: true,
        },
        {
            title: 'Адрес',
            dataIndex: 'adres',
            sorter: true,

        },
        {
            title: 'data posledney prodaji',
            dataIndex: 'dataPosledneyProdaji',
            sorter: true,
        },
        {
            title: 'kurator',
            dataIndex: 'kurator',
            sorter: true,
        },
        {
            title: 'segment',
            dataIndex: 'segment',
            sorter: true,
        },
        {
            title: 'texnalogiya',
            dataIndex: 'texnalogiya',
            sorter: true,
        },
        {
            title: 'data podklyucheniya',
            dataIndex: 'dataPodklyucheniya',
            sorter: true,
        },
    ]
    return (
        <div>
            <MainTable columns={columns} path={"reference"} />
        </div>
    )
}

export default HomePage