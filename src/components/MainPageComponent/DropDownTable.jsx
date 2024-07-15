import { Table } from 'antd'
export default function DropDownTable() {
  // продажа tab start
  const data = [
    {
      key: 1,
      month: '8',
      year: '2021',
      loanAmount: '115242.0',
      details: [
        {
          key: 1,
          date: 'Дата оформления заявки',
          client: 'Мальцева Екатерина Станиславовна',
          amount: '115242.0',
          status: 'Выдано',
        },
      ],
    },
    {
      key: 2,
      month: '10',
      year: '2021',
      loanAmount: '161700.0',
      details: [
        {
          key: 1,
          date: 'Дата оформления заявки',
          client: '',
          amount: '',
          status: '',
        },
      ],
    },
  ];

  const expandedRowRender = (record) => {
    const columns = [
      { title: 'Дата оформления заявки', dataIndex: 'date', key: 'date' },
      { title: 'ФИО клиента', dataIndex: 'client', key: 'client' },
      { title: 'Сумма кредита', dataIndex: 'amount', key: 'amount' },
      { title: 'Статус заявки', dataIndex: 'status', key: 'status' },
    ];

    return <Table columns={columns} dataSource={record.details} pagination={false} />;
  };

  const columns = [
    { title: 'Месяц', dataIndex: 'month', key: 'month' },
    { title: 'Год', dataIndex: 'year', key: 'year' },
    { title: 'Сумма кредита', dataIndex: 'loanAmount', key: 'loanAmount' },
  ];
  // продажа tab end
  return <div>

    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
        }}
        dataSource={data}
      />
    </div>
  </div>;
}