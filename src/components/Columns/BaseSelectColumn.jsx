import { useEffect, useState } from 'react'
import { Form, Select } from 'antd'
import { useGetSelectsQuery, useUpdateRowMutation } from '../../store/api/mainApi.js'

const BaseSelectColumn = ({
    title,
    dataIndex,
    sorter = true,
    filterFunction = m => ({
        text: m.name,
        label: m.name,
        value: m.id
    }),
    key,
    pathToOptions,
    paramsForOptions,
    pathToSave,
    required = true,
    editable = false
}) => {

    const [ updateRow ] = useUpdateRowMutation()
    const { data: selectData = [], } = useGetSelectsQuery({
        path: pathToOptions,
        params: paramsForOptions
    })

    const [ options, setOptions ] = useState([])
    const save = (record, text, value) => {
        try {
            const values = {
                [dataIndex]: value.value,
                [key]: value.label
            }
            const row = { ...record, ...values }
            row.path = pathToSave || pathToOptions
            updateRow(row)
        } catch (errInfo) {
            console.log('Save failed:', errInfo)
        }
    }

    useEffect(() => {
        if (selectData !== undefined && selectData.data !== undefined) {
            setOptions(selectData.data.map(filterFunction))
        }
    }, [ selectData ])

    return ({
        title: title,
        dataIndex: dataIndex,
        key: key,
        sorter: sorter,
        filters: options,
        filterSearch: true,
        render(text, record, index) {
            return (
                <Form.Item
                    style={ { margin: 0 } }
                    name={ record[dataIndex] + index }
                    initialValue={ record[dataIndex] }
                    validateTrigger={ [ 'onChange' ] }
                    rules={ [
                        {
                            required: { required },
                            message: 'Заполните поле',
                        },
                    ] }
                >
                    { (editable
                        ? <Select options={ options } onChange={ (...props) => save(record, ...props) } />
                        : record[dataIndex]) }

                </Form.Item>
            )

        }
    })
}
export default BaseSelectColumn