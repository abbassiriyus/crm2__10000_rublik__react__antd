import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Table } from 'antd'
import { useDeleteRowMutation, useGetRowsQuery, useUpdateRowMutation } from '../../store/api/mainApi.js'
import EditableRow from '../EditableRow/EditableRow.jsx'

const CompTradingPoints = ({
  path,
  buttons = [],
  showActions = true
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageSearchParam = searchParams.get('page') || 1
  const pageSizeSearchParam = searchParams.get('pageSize') || 3

  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [sortField, setSortField] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const [filters, setFilters] = useState({})

  const [data, setData] = useState([
    {
      idTT: '1',
      inn: '123456789',
      yuridicheskoeLitso: 'Company A',
      brend: 'option-1',
      naselenniyPunkit: 'City A',
      adres: 'Address A',
      dataPosledneyProdaji: '2023-06-01',
      kurator: 'option-1',
      segment: 'option-1',
      texnalogiya: 'Technology A',
      dataPodklyucheniya: '2023-01-01',
    },
    {
      idTT: '2',
      inn: '987654321',
      yuridicheskoeLitso: 'Company B',
      brend: 'option-2',
      naselenniyPunkit: 'City B',
      adres: 'Address B',
      dataPosledneyProdaji: '2023-06-02',
      kurator: 'option-2',
      segment: 'option-2',
      texnalogiya: 'Technology B',
      dataPodklyucheniya: '2023-01-02',
    },
    {
      idTT: '3',
      inn: '123123123',
      yuridicheskoeLitso: 'Company C',
      brend: 'option-3',
      naselenniyPunkit: 'City C',
      adres: 'Address C',
      dataPosledneyProdaji: '2023-06-03',
      kurator: 'option-3',
      segment: 'option-3',
      texnalogiya: 'Technology C',
      dataPodklyucheniya: '2023-01-03',
    },
  ]);

  const columns = [
    {
      title: 'IDTT',
      dataIndex: 'idTT',
      sorter: true,
      editable: true,
    },
    {
      title: 'тех ИНН',
      sorter: true,
      dataIndex: 'inn',
      editable: true,
    },
    {
      title: 'населенный пункит',
      dataIndex: 'населенный пункит',
      sorter: true,
    },
    {
      title: 'фактический адрес',
      dataIndex: 'фактический адрес',
      sorter: true,
    },
    {
      title: 'e.mail',
      dataIndex: 'e-mail',
      sorter: true,
    },
    {
      title: 'telefon',
      dataIndex: 'telefon',
      sorter: true,
    },
  ]

  const {
    isFetching,
    refetch
  } = useGetRowsQuery({
    sort: {
      sortField,
      sortDirection
    },
    filters,
    page: pageSearchParam,
    pageSize: pageSizeSearchParam,
  })



  const [updateRow] = useUpdateRowMutation()

  const preparedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        title: col.title,
      }),
    }
  })

  function handlePaginationChange(page, pageSize) {
    setSearchParams({
      page,
      pageSize
    })
  }

  function handleRowSelection(ids) {
    setSelectedRowKeys(ids)
  }

  function handleSort(sorter) {
    const {
      field,
      order
    } = sorter || {}

    setSortField(field)
    setSortDirection(order)
  }

  function handleFilter(innerFilters = {}) {
    setFilters(prev => ({
      ...prev,
      ...innerFilters
    }))
  }

  function handleTableChange(pagination, innerFilters, sorter) {
    handleSort(sorter)
    handleFilter(innerFilters)
  }


  function handleDelete(id) {
    setData(data.filter(c => c.idTT !== id))
  }

  function handleRefresh() {
    refetch()
  }

  const components = {
    body: {
      row: EditableRow,
    },
  }

  const resultColumns = [
    ...preparedColumns,
    showActions && {
      title: 'Действия',
      render: (text, record) => {
        return (
          <>
            <button className='infoBtn' onClick={(e) => {
              e.stopPropagation()
              handleDelete(text.idTT)
            }} > delete </button>
          </>
        )
      },
    }].filter(Boolean);
  return (
    <>
      <Table
        columns={resultColumns}
        rowKey="idTT"
        components={components}
        dataSource={data}
        rowClassName={() => 'editable-row'}
        pagination={{
          current: pageSearchParam,
          pageSize: pageSizeSearchParam,
          total: data.totalSize || 0,
          showSizeChanger: true,
          pageSizeOptions: [3, 5, 10, 20, 50, 100],
          onChange: handlePaginationChange
        }}
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          onChange: handleRowSelection,
        }}
        loading={isFetching}
        onChange={handleTableChange}
        bordered
        scroll={{
          x: 'max-content'
        }}
      />
    </>
  )
}

export default CompTradingPoints