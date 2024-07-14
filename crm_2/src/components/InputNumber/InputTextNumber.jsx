import { useState } from 'react'
import { Form, InputNumber } from 'antd'
import PropTypes, { func, number, object, string } from 'prop-types'

const InputTextNumber = ({
    displayMode = false,
    dataIndex,
    record,
    isFormItem = true,
    rules,
    save,
    entityId = 'id',
    tableName,
    dbFieldName = dataIndex,
    parametersForSave,
    min = 0,
    max = 9_999_999,
    step = 0.01,
    prefix,
    suffix,
    tabIndex,
    inputNumberStyle = { width: 200 }
}) => {
    const [value, setValue] = useState(record[dataIndex])
    const [isEdited, setIsEdited] = useState(false)

    const finalInput = isFormItem
        ? (
            <Form.Item
                style={{ margin: 0, width: '100%' }}
                name={tabIndex ? tabIndex : dataIndex}
                rules={rules}
            >
                <InputNumber
                    tabIndex={tabIndex}
                    style={inputNumberStyle}
                    prefix={prefix}
                    suffix={suffix}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={value}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    stringMode={false}
                />
            </Form.Item>
        )
        : (
            <InputNumber
                style={inputNumberStyle}
                prefix={prefix}
                suffix={suffix}
                min={min}
                max={max}
                step={step}
                defaultValue={value}
                onChange={handleChange}
                onBlur={handleBlur}
                stringMode={false}
            />
        )

    function handleSave() {
        if (!parametersForSave) {
            parametersForSave = {
                'id': record[entityId],
                'tableName': tableName,
                'dbFieldName': dbFieldName,
                'value': value
            }
        }
        parametersForSave['value'] = value
        save?.(parametersForSave)
    }

    function handleChange(val) {
        setIsEdited(true)
        setValue(val)
    }

    function handleBlur() {
        if (isEdited) {
            handleSave()
            setIsEdited(false)
        }
    }

    return (

        displayMode
            // режим чтения
            ? (
                <div>
                    {record[dataIndex]}
                </div>
            )
            // режим редактирования
            : finalInput
    )
}

InputTextNumber.propTypes = {
    displayMode: PropTypes.bool,
    dataIndex: PropTypes.string.isRequired,
    record: PropTypes.object.isRequired,
    isFormItem: PropTypes.bool,
    rules: PropTypes.arrayOf(PropTypes.object),
    save: func,
    entityId: string,
    tableName: string,
    dbFieldName: string,
    parametersForSave: object,
    min: number,
    max: number,
    step: number,
    prefix: string,
    suffix: string,
    tabIndex: string,
    inputNumberStyle: object
}

export default InputTextNumber
