import { Col, Row, Typography } from 'antd'
import PropTypes from 'prop-types'
import InputSelect from './InputSelect.jsx'
import React from "react";
import { useGetSelectsQuery } from "../../store/api/mainApi";

const { Title } = Typography

// Компонент для рендеринга сложного InputText
const InputTextRow = ({
                          rowSpan,
                          colSpan,
                          title,
                          name,
                          isEditMode,
                          record,
                          handleSave,
                          required,
                          requiredMessage,
                          entityId,
                          tableName,
                          dbFieldName,
                          selectPath,
                          selectParams
                      }) => {

    const {
        data: selectData = [],
        isFetching: selectIsLoading,
    } = useGetSelectsQuery({
        path: selectPath,
        params: selectParams
    })

    const options = selectData.data ? selectData.data : selectData;
    return (
        <>
            <Row gutter={ rowSpan | 16 }>
                <Col span={ colSpan | 24 }>
                    <Title level={ 5 }>{ title }</Title>
                    <InputSelect options={ options }
                                 loading={ selectIsLoading }
                                 record={ record }
                                 save={ handleSave }
                                 dataIndex={ name }
                                 displayMode={ !isEditMode }
                                 entityId={ entityId }
                                 tableName={ tableName }
                                 dbFieldName={ dbFieldName }
                                 rules={ [ {
                                     required: required | true,
                                     message: requiredMessage | 'Необходимо заполнить поле'
                                 } ] }/>
                </Col>
            </Row>
        </>
    )
}

InputTextRow.propTypes = {
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
}

export default InputTextRow