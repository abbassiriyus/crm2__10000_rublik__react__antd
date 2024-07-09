import { Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import InputMask from 'react-input-mask'

const { TextArea } = Input

const InputTextMask = ({
  displayMode = false,
  dataIndex,
  record,
  isFormItem = true,
  rules,
  save
}) => {
  const [value, setValue] = useState(record[dataIndex])
  const [isEdited, setIsEdited] = useState(false)
  const finalInput = isFormItem
    ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={rules}
      >
        <InputMask/>
        <TextArea
          autoSize={{
            minRows: minRows,
            maxRows: maxRows
          }}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
    )
    : (
      <TextArea
        autoSize={{
          minRows: 3,
          maxRows: 15
        }}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    )

  function handleSave() {
    save?.({
      ...record,
      [dataIndex]: value
    })
  }

  function handleChange(val) {
    setIsEdited(true)
    setValue(val.target.value)
  }

  function handleBlur() {
    if (isEdited) {
      handleSave(value)
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

InputTextMask.propTypes = {
  displayMode: PropTypes.bool,
  dataIndex: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  isFormItem: PropTypes.bool,
  rules: PropTypes.arrayOf(PropTypes.object),
}

export default InputTextMask
