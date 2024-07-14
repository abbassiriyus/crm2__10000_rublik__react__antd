import React, { useState } from 'react'
import { Button, ConfigProvider, DatePicker, Form, Space } from 'antd'
import locale from 'antd/locale/ru_RU'
import axiosInstance from '../auth/setupAxios.js'

const { RangePicker } = DatePicker

const GetReportButton = ({
    path,
    label,
    showDate,
    showStatusBank
}) => {
    const [form] = Form.useForm()
    const [selectedDates, setSelectedDates] = useState()

    const handleDateChange = (dates) => {
        setSelectedDates(dates)
    }

    const handleDownload = async (name) => {
        await form.validateFields()
        try {
            const requestDate = selectedDates === undefined ? {} : {
                startDate: selectedDates[0].format('DD.MM.YYYY'),
                endDate: selectedDates[1].format('DD.MM.YYYY')
            }
            const [response] = await Promise.all([axiosInstance({
                url: `/reports?name=${name}`,
                method: 'post',
                data: { ...requestDate },
                responseType: 'blob'
            })])

            const filename = response.headers['content-disposition']
                ? response.headers['content-disposition'].split('filename=')[1]
                : `${name}.xlsx`

            downloadFile(response.data, filename)
        } catch (error) {
            console.log('Failed get report', error)
        }
    }

    const downloadFile = (blob, name) => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()
        link.remove()
    }

    return (
        <Form form={form}>
            <Space align="start" direction="horizontal">
                {label}
                {(showDate
                    ? <ConfigProvider locale={locale}>
                        <Form.Item style={{ margin: 0 }}
                                   name={path}
                                   rules={[
                                       {
                                           required: true,
                                           message: 'Заполните период отчета',
                                       },
                                   ]}>
                            <RangePicker onChange={handleDateChange}/>
                        </Form.Item>
                    </ConfigProvider>
                    : null)
                }

                <Button type="primary" onClick={() => handleDownload(path)}>
                    Загрузить
                </Button>
            </Space>
        </Form>)
}

export default GetReportButton