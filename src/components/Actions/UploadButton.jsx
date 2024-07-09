import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd'
import { serverApiUrl } from '../../Config.jsx'
import axiosInstance from '../../auth/setupAxios.js'

async function customRequest(path,
    file,
    onError,
    onSuccess) {

    const formData = new FormData()
    formData.append('file', file)

    try {
        const response = await axiosInstance.post(`${serverApiUrl}${path}`, formData)

        onSuccess(response)
    } catch (error) {
        onError(error)
        message.error(`${file.name} file upload failed`)
    }
}

const UploadButton = ({
    title,
    path
}) => (
    <Upload
        showUploadList={false}
        customRequest={({
            file,
            onError,
            onSuccess
        }) =>
            customRequest(
                path,
                file,
                onError,
                onSuccess
            )}>
        <Button icon={<UploadOutlined/>}>{title}</Button>
    </Upload>
)

export default UploadButton