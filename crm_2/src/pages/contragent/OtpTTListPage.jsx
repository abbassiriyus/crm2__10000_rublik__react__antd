import BaseInputColumn from '../../components/Columns/BaseInputColumn.jsx'
import MainTable from '../../components/MainTable/MainTable.jsx'
import React, { useEffect } from 'react'
import UploadButton from '../../components/Actions/UploadButton.jsx'
import DownloadButton from '../../components/Actions/DownloadButton.jsx'
import { useSearchParams } from 'react-router-dom'

const OtpTTListPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const path = 'otp_tt'

    useEffect(() => {
        if (!searchParams.has('pageSize')) {
            setSearchParams({
                page: searchParams.get('page') || '1',
                pageSize: '10'
            })
        }
    }, [searchParams])

    const columns = [
        BaseInputColumn({
            title: 'Идентификатор ТТ',
            dataIndex: 'ttId',
            pathToSave: 'otpTT',
            editable: false
        }),
        BaseInputColumn({
            title: 'Дата обновления статуса',
            dataIndex: 'updatedStatus',
            pathToSave: 'otpTT',
            editable: false,
        }),
        BaseInputColumn({
            title: 'Идентификатор ОТП',
            dataIndex: 'otpId',
            pathToSave: 'otpTT',
            editable: false,
        }),
        BaseInputColumn({
            title: 'Код ошибки',
            dataIndex: 'errorCode',
        }),
        BaseInputColumn({
            title: 'Расшифровка ошибки',
            dataIndex: 'errorMessage',
        }),
    ]

    const buttons = [
        <DownloadButton title="Экспортировать в CSV" path="/otp_tt/csv_download"/>,
        <UploadButton title="Импортировать CSV" path="/otp_tt/csv_upload"/>
    ]
    return (<>
        <MainTable columns={columns} path={path} showActions={false} buttons={buttons}/>
    </>)
}

export default OtpTTListPage