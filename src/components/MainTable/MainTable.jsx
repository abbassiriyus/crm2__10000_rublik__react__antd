import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Space, Table } from 'antd'
import { useDeleteRowMutation, useGetRowsQuery, useUpdateRowMutation } from '../../store/api/mainApi.js'
import EditableRow from '../EditableRow/EditableRow.jsx'
import './style.css'
import Actions from '../Actions/Actions.jsx'

const MainTable = ({
    columns,
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

    const {
        data = [],
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
        path: path
    })
    const [updateRow] = useUpdateRowMutation()
    const [deleteRow] = useDeleteRowMutation()

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

    function handleSave(row) {
        row.path = path
        updateRow(row)
    }

    function handleDelete(row) {
        deleteRow(row)
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
            dataIndex: 'actions',
            render: (text, record) => {
                const extendRecord = {
                    ...record,
                    path: path
                }
                return (
                    <Actions
                        deleteRow={handleDelete}
                        openRowInfo={() => {
                        }}
                        record={extendRecord}
                        updateRow={handleSave}
                        path={path}
                    />
                )
            },
        }].filter(Boolean);
    return (
        <>
            <Space align="center">
                <Button
                    type="primary"
                    shape="default"
                    onClick={handleRefresh}
                    icon={<ReloadOutlined/>}>
                    Обновить
                </Button>
                <Link to="-?new=true" className="main-table-buttons__link">
                    <Button
                        type="primary"
                        shape="default"
                        icon={<PlusOutlined/>}>
                        Создать
                    </Button>
                </Link>
                {...buttons}
            </Space>
            <Table
                columns={resultColumns}
                rowKey="id"
                components={components}
                dataSource={data.data}
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

export default MainTable