import { useState } from 'react'
import { Form, Input } from 'antd'
import PropTypes, { object, string } from 'prop-types'

const InputText = ({
    displayMode = false,
    dataIndex,
    record,
    isFormItem = true,
    rules,
    save,
    entityId = 'id',
    tableName,
    dbFieldName = dataIndex,
    parametersForSave
}) => {
    const [ value, setValue ] = useState(record[dataIndex])
    const [ isEdited, setIsEdited ] = useState(false)
    const finalInput = isFormItem
        ? (
            <Form.Item
                style={ { margin: 0, width: '100%' } }
                name={ dataIndex }
                rules={ rules }
            >
                <Input
                    value={ value }
                    defaultValue={ value }
                    onChange={ handleChange }
                    onBlur={ handleBlur } string={ value }
                />
            </Form.Item>
        )
        : (
            <Input
                value={ value }
                defaultValue={ value }
                onChange={ handleChange }
                onBlur={ handleBlur } string={ value }
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
        setValue(val.target.value)
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
                    { record[dataIndex] }
                </div>
            )
            // режим редактирования
            : finalInput
    )
}

InputText.propTypes = {
    displayMode: PropTypes.bool,
    dataIndex: PropTypes.string.isRequired,
    record: PropTypes.object.isRequired,
    isFormItem: PropTypes.bool,
    rules: PropTypes.arrayOf(PropTypes.object),
    save: PropTypes.func,
    entityId: string,
    tableName: string,
    dbFieldName: string,
    parametersForSave: object
}

export default InputText
