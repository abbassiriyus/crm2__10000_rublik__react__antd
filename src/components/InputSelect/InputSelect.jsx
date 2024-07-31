import React, { useState, useEffect } from 'react'
import { Form, Select } from 'antd'

const InputSelect = ({
    save,
    dataIndex,
    record = {},
    rules = [],
    options = [],
    displayMode = false,
    isFormItem = true,
    allowClear = false,
    entityId = 'id',
    tableName,
    dbFieldName = dataIndex,
    ...restProps
}) => {
    const [value, setValue] = useState(record[dataIndex] || undefined)

    useEffect(() => {
        setValue(record[dataIndex] || undefined)
    }, [record, dataIndex])

    function handleSave(val) {
        if (save) {
            save({
                id: record[entityId],
                tableName,
                dbFieldName,
                value: val
            })
        }
    }

    function handleChange(val) {
        setValue(val)
        handleSave(val || null)
    }

    const preparedOptions = Array.isArray(options) && options.length > 0
        ? options.map(curr => ({
            value: curr.id,
            label: curr.name
        }))
        : []

    const finalInput = (
        <Select
            {...restProps}
            defaultValue={value || undefined}
            value={value || undefined}
            onChange={handleChange}
            style={{ width: '100%' }}
            allowClear={allowClear}
            options={preparedOptions}
        />
    )

    return displayMode ? (
        <>{preparedOptions.length > 0
            ? preparedOptions.find(opt => opt.value === record[dataIndex])?.label
            : finalInput}
        </>
    ) : finalInput
}

export default InputSelect
