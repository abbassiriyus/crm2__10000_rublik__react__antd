import { Col, Row, Typography } from 'antd'
import InputTextMask from './InputTextMask.jsx'
import PropTypes from 'prop-types'

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const InputTextMaskRow = ({
  rowSpan,
  colSpan,
  title,
  name,
  isEditMode,
  record,
  handleSave,
  required,
  requiredMessage
}) => {

  return (
    <>
      <Row gutter={rowSpan | 16}>
        <Col span={colSpan | 24}>
          <Title level={5}>{title}</Title>
          <InputTextMask
            rules={[{
              required: required | true,
              message: requiredMessage | 'Необходимо заполнить поле'
            }]}
            displayMode={!isEditMode}
            dataIndex={name}
            record={record}
            isFormItem
            save={handleSave}
          />
        </Col>
      </Row>
    </>
  )
}

InputTextMaskRow.propTypes = {
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  name: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool,
  record: PropTypes.object.isRequired,
  required: PropTypes.bool,
  requiredMessage: PropTypes.string,
}

export default InputTextMaskRow