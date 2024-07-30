import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Form, Skeleton, Tabs } from 'antd'
import PropTypes from 'prop-types'
import { useCreateRowMutation, useGetRowInfoQuery, useUpdateRowMutation } from '../../store/api/mainApi.js'
import ButtonsInfo from './ButtonsInfo.jsx'
import './style.css'
import GeneralInfo from "../InfoPage/GeneralInfo.jsx";
import InfoRequestTT from "../InfoPage/InfoRequestTT.jsx";
import Usloviya from "../InfoPage/Usloviya.jsx";
import Comments from "../InfoPage/Comments.jsx";
import ExtraProduct from "../InfoPage/ExtraProduct.jsx";

const InfoTable = ({
    path,
    metadata
}) => {


    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const isNew = searchParams.get('new')
    const [status, setStatus] = useState(0)

    const [isEditMode, setIsEditMode] = useState(!!isNew)

    const [isEditAfterSave, setIsEditAfterSave] = useState(false)

    const formRef = useRef(null)
    const { id } = useParams()

    const {
        data: rowData = {},
        isLoading
    } = useGetRowInfoQuery({
        id: id,
        path: path
    }, { skip: isNew })
    const [updateRow] = useUpdateRowMutation()
    const [createRow] = useCreateRowMutation()

    const [record, setRecord] = useState(rowData === undefined || rowData.data === undefined ? {} : rowData.data)

    useEffect(() => {
        if (!isLoading && !isNew) {
            formRef.current.resetFields()
        }
    }, [isLoading, isNew])

    // Используйте useEffect для обновления состояния record, когда rowData меняется.
    useEffect(() => {
        if (rowData && rowData.data) {
            setRecord(rowData.data)
        }
    }, [rowData])

    function enableEditMode() {
        setIsEditMode(true)
        setStatus(0)
    }

    function disableEditMode() {
        setIsEditMode(false)
    }

    function handleBack() {
        if (isEditAfterSave) {
            navigate(-2)
            setIsEditAfterSave(false)
        } else {
            navigate(-1)
        }
    }

    async function handleSave(row, anotherPath) {
        setStatus(2)
        setRecord({ ...record, ...row })
        if (isNew) {
            try {
                const response = await createRow({
                    ...row,
                    path: anotherPath ? anotherPath : path
                }).unwrap()
                setRecord({
                    ...row,
                    id: response.id
                })
                setStatus(1)
                navigate(`/${path}/${response.id}`)
                setIsEditMode(true)
                setIsEditAfterSave(true)
            } catch (err) {
                setStatus(-1)
            }
            return
        }

        try {
            await updateRow({
                ...row,
                path: anotherPath ? anotherPath : path
            })
            setStatus(1)
        } catch (err) {
            setStatus(-1)
        }
    }

    function handleCancel() {
        if (isNew) {
            handleBack()
            return
        }
        disableEditMode()
    }
    const getElementsRender = (elements) => {
        return (
            <div>
                {elements.map((element, index) => {
                    switch (element.type) {
                        case 'GeneralInfo':
                            return <GeneralInfo />;
                        case 'RequisitesTT':
                            return <InfoRequestTT />;
                        case 'Usloviya':
                            return <Usloviya />;
                        case 'Comments':
                            return <Comments />;
                        case 'Banks':
                            return 'Banks';
                        case 'AdditionalProducts':
                            return <ExtraProduct />
                        default:
                            return null;
                    }
                })}
            </div>
        );
    };

    const getTabsOrElements = () => {
        if (Object.keys(metadata).length > 1) {
            const items = Object.keys(metadata).map((tabKey) => {
                const elements = metadata[tabKey];
                return {
                    label: tabKey,
                    key: tabKey,
                    children: getElementsRender(elements),
                };
            });

            return <Tabs defaultActiveKey="1" items={items} />;
        }

        return Object.values(metadata).map((innerElements, index) => {
            return (
                <div key={index}>
                    {getElementsRender(innerElements)}
                </div>
            );
        });
    };

    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={handleSave}
                ref={formRef}
            >
                <div className="form-content">
                    <ButtonsInfo
                        handleBack={handleBack} isLoading={isLoading} isEditMode={isEditMode}
                        enableEditMode={enableEditMode} handleCancel={handleCancel} status={status}
                    />

                    {isLoading ? (
                        <>
                            <Skeleton.Input
                                active style={{
                                    width: '100%',
                                    margin: '20px 0',
                                }} block
                            />
                        </>
                    ) : (getTabsOrElements())}
                </div>
            </Form>
        </>
    )
}

InfoTable.propTypes = {
    path: PropTypes.string.isRequired,
    metadata: PropTypes.array.isRequired
}

export default InfoTable