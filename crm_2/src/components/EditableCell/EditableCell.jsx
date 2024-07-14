import React, { useContext, useEffect, useRef, useState } from 'react'
import { DatePicker, Form, Input, Select } from 'antd'
import './style.css'
import { EditableContext } from '../EditableRow/EditableRow.jsx'

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {

    const [editing, setEditing] = useState(false)
    //нужен для фокусировки на обьекте при нажатие в режиме редактирования
    const inputRef = useRef(null)
    const form = useContext(EditableContext)

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus()
        }
    }, [editing])

    const toggleEdit = () => {
        setEditing(!editing)
        form.setFieldsValue({ [dataIndex]: record[dataIndex] })
    }

    const save = async () => {
        try {
            const values = { [dataIndex]: record[dataIndex] }

            toggleEdit()
            handleSave({ ...record, ...values })
        } catch (errInfo) {
            console.log('Save failed:', errInfo)
        }
    }

    let childNode = record === undefined ? children : record[restProps.keyoption]

    if (editable) {
        let inputNode = <Input ref={inputRef} onPressEnter={save} onBlur={save} key={dataIndex}/>
        if (restProps.inputtype !== undefined) {
            if (restProps.inputtype === 'inputDate') {
                inputNode = <DatePicker/>
            } else if (restProps.inputtype === 'select') {
                inputNode = (
                    <Select ref={inputRef}
                            value={childNode}
                            onChange={save}
                            options={restProps.options}/>
                )
            } else if (restProps.inputtype === 'input') {
                inputNode = (
                    <Input ref={inputRef} onPressEnter={save} onBlur={save}
                           key={dataIndex} placeholder={title}/>
                )
            }

        }

        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}>
                {inputNode}
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {childNode}
            </div>
        )
    }

    return <td {...restProps} key={dataIndex}>{childNode}</td>
}

export default EditableCell
