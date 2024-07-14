import { Button } from 'antd'
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  MinusCircleOutlined,
  QuestionCircleOutlined,
  StopOutlined
} from '@ant-design/icons'
import React from 'react'

const ButtonsInfo = ({
  handleBack,
  isLoading,
  isEditMode,
  enableEditMode,
  handleCancel,
  status
}) => {

  function getIconForStatus(status) {
    switch (status) {
      case -1:
        return <CloseCircleOutlined style={{ color: 'red' }}/>
      case 1:
        return <CheckCircleOutlined style={{ color: 'green' }}/>
      case 2:
        return <QuestionCircleOutlined/>
      default:
        return <MinusCircleOutlined/>
    }
  }

  return (
    <div className="info-table-buttons">
      {!isEditMode && (
        <>
          <Button
            type="primary"
            shape="default"
            onClick={handleBack}
            icon={<ArrowLeftOutlined/>}
          >
            Назад
          </Button>
          <Button
            type="primary"
            shape="default"
            disabled={isLoading}
            onClick={enableEditMode}
            icon={<EditOutlined/>}
          >
            Редактировать
          </Button>
        </>
      )}
      {isEditMode && (
        <>
          <Button
            type="primary"
            shape="default"
            onClick={handleCancel}
            icon={<StopOutlined/>}
          >
            Закрыть
          </Button>
          {getIconForStatus(status)}
        </>
      )}
    </div>
  )
}

export default ButtonsInfo