import React, { useState } from 'react'
import { DatePicker, Form } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

const DateSelect = ({
                        save,
                        rules,
                        dataIndex,
                        record,
                        displayMode = false,
                        isFormItem = false,
                        dateFormat = 'DD.MM.YYYY',
                        allowClear = false,
                        entityId = 'id',
                        tableName,
                        dbFieldName = dataIndex
                    }) => {

    const [ value, setValue ] = useState(record[dataIndex] ? dayjs(record[dataIndex]) : null);

    function handleSave(dateString) {
        save?.({
            'id': record[entityId],
            'tableName': tableName,
            'dbFieldName': dbFieldName,
            'value': dateString
        })
    }

    function handleChange(val) {
        if (val != null) {
            setValue(val);
            handleSave(val ? dayjs(val).format('YYYY-MM-DDTHH:mm:ss') : null);
        }
    }

    const finalInput = isFormItem
        ? (
            <Form.Item
                style={ { margin: 0 } }
                name={ dataIndex }
                rules={ rules }
                initialValue={ value }
                getValueProps={ i => {
                    return { value: value }
                } }
            >
                <DatePicker
                    onChange={ handleChange }
                    defaultValue={ value }
                    value={ value }
                    format={ dateFormat }
                    locale={ locale }
                />
            </Form.Item>
        ) : (
            <DatePicker
                allowClear={ allowClear }
                onChange={ handleChange }
                defaultValue={ value }
                value={ value }
                format={ dateFormat }
                locale={ locale }
            />
        )

    return (
        displayMode ? (
            <div>
                { value ? dayjs(value).format(dateFormat).toString() : '' }
            </div>
        ) : finalInput
    )
}

export default DateSelect
