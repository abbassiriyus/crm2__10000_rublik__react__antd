import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useUpdateRowMutation } from '../../store/api/mainApi.js'

const BaseInputColumn = ({
                             title,
                             dataIndex,
                             sorter = true,
                             filterFunction = m => ({
                                 text: m.name,
                                 value: m.id
                             }),
                             required = true,
                             pathToSave,
                             editable = false,
                             key
                         }) => {

    const [ updateRow ] = useUpdateRowMutation()
    const [ data, setData ] = useState('')

    const handleSearch = (selectedKeys, confirm) => {
        confirm()
        if (selectedKeys === undefined || selectedKeys.length === 0) {
            return {}
        }
        setData(selectedKeys.map(filterFunction))
    }

    const handleReset = (clearFilters, confirm) => {
        clearFilters()
        setData('')
        confirm()
    }

    const save = (record, value) => {
        try {
            const values = {
                [dataIndex]: value,
            }
            let row = { ...record, ...values }
            row.path = pathToSave
            updateRow(row)
        } catch (errInfo) {
            console.log('Save failed:', errInfo)
        }
    }

    return {
        title: title,
        dataIndex: dataIndex,
        key: key || dataIndex,
        filters: data,
        filterDropdown: ({
                             setSelectedKeys,
                             selectedKeys,
                             confirm,
                             clearFilters
                         }) => (
            <div style={ { padding: 8 } }>
                <Input
                    placeholder={ title }
                    value={ selectedKeys[0] }
                    onChange={ e => setSelectedKeys(e.target.value ? [ e.target.value ] : []) }
                    onPressEnter={ () => handleSearch(selectedKeys, confirm) }
                    style={ {
                        marginBottom: 8,
                        display: 'block'
                    } }/>
                <Button onClick={ () => handleSearch(selectedKeys, confirm) } type="primary"
                        shape="circle" icon={ <SearchOutlined/> }/>
                <Button onClick={ () => handleReset(clearFilters, confirm) }>Сброс</Button>
            </div>
        ),
        sorter: sorter,
        inputType: 'input',
        render(text, record, index) {
            return (
                <Form.Item
                    style={ { margin: 0 } }
                    name={ record[dataIndex] + index }
                    initialValue={ record[dataIndex] }
                    validateTrigger={ [ 'onChange', 'onBlur' ] }
                    rules={ [
                        {
                            required: { required },
                            message: 'Заполните поле',
                        },
                    ] }>
                    { (editable
                        ? <Input onPressEnter={ (...props) => save(record, props[0].target.value) }
                                 onBlur={ (...props) => save(record, props[0].target.value) }
                                 key={ dataIndex } placeholder={ title }/>
                        : record[dataIndex]) }
                </Form.Item>
            )

        }
    }
}
export default BaseInputColumn