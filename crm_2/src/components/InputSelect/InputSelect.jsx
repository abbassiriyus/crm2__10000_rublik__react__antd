import React, { useState } from 'react'
import { Form, Select } from 'antd'

const InputSelect = ({
                         save,
                         dataIndex,
                         record,
                         rules,
                         options,
                         displayMode,
                         isFormItem,
                         allowClear,
                         entityId = 'id',
                         tableName,
                         dbFieldName = dataIndex,
                         ...restProps
                     }) => {
    const [ value, setValue ] = useState(record[dataIndex])

    function handleSave(val) {
        save?.({
            'id': record[entityId],
            'tableName': tableName,
            'dbFieldName': dbFieldName,
            'value': val
        })
    }

    function handleChange(val) {
        setValue(val)
        handleSave(val || null)
    }

    let preparedOptions
    if (Array.isArray(options) && options.length > 0) {
        preparedOptions = options.map(curr => ({
            value: curr.id,
            label: curr.name
        }))
    } else {
        preparedOptions = {}
    }

    const finalInput = isFormItem
        ? (
            <Form.Item
                style={ { margin: 0 } }
                rules={ rules }
                name={ dataIndex }
            >
                <Select
                    { ...restProps }
                    defaultValue={ value }
                    value={ value }
                    onChange={ handleChange }
                    style={ { width: '100%' } }
                    allowClear={ allowClear }
                    options={ preparedOptions }
                />
            </Form.Item>
        ) : (
            <Select
                { ...restProps }
                defaultValue={ value }
                value={ value }
                onChange={ handleChange }
                style={ { width: '100%' } }
                allowClear={ allowClear }
                options={ preparedOptions }
            />
        )

    return (
        displayMode ? (
            <>
                { preparedOptions.length > 0 ? preparedOptions.find(opt => opt.value === record[dataIndex])?.label
                    : finalInput }
            </>
        ) : finalInput
    )
}

export default InputSelect
