import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BaseInputColumn from '../../components/Columns/BaseInputColumn.jsx'
import BaseDateColumn from '../../components/Columns/BaseDateColumn.jsx'
import MainTable from '../../components/MainTable/MainTable.jsx'
import DownloadButton from '../../components/Actions/DownloadButton.jsx'
import UploadButton from '../../components/Actions/UploadButton.jsx'

const OtpAgentListPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const path = 'otp_agent'

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
            title: 'Фамилия',
            dataIndex: 'firstName',
        }), BaseInputColumn({
            title: 'Имя',
            dataIndex: 'lastName',
        }), BaseInputColumn({
            title: 'Отчество',
            dataIndex: 'middleName',
        }),
        BaseDateColumn({
            title: 'Дата рождения',
            dataIndex: 'dateOfBirth'
        }),
        BaseInputColumn({
            title: 'Идентификатор',
            dataIndex: 'tradeNetUserID',
        }),
        BaseInputColumn({
            title: 'Активность',
            dataIndex: 'active',
        }),
        BaseDateColumn({
            title: 'Дата обновления',
            dataIndex: 'updatedStatus'
        }),
        BaseInputColumn({
            title: 'Статус',
            dataIndex: 'currentStatus',
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
        <DownloadButton title="Экспортировать в CSV" path="/otp_agent/csv_download"/>,
        <UploadButton title="Импортировать CSV" path="/otp_agent/csv_upload"/>
    ]
    return (<>
        <MainTable columns={columns} path={path} showActions={false} buttons={buttons}/>
    </>)
}

export default OtpAgentListPage