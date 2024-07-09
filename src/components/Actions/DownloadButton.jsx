import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axiosInstance from '../../auth/setupAxios.js'

async function handleDownload(path) {
    const [response] = await Promise.all([axiosInstance({
        url: path,
        method: 'get',
        responseType: 'blob'
    })])

    const filename = response.headers['content-disposition']
        ? decodeURIComponent(response.headers['content-disposition'].split('filename=')[1])
        : `${name}.csv`

    downloadFile(response.data, filename)
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

const DownloadButton = ({
    title,
    path
}) => (
    <Button onClick={() => handleDownload(path)} icon={<DownloadOutlined/>}>{title}</Button>
)

export default DownloadButton