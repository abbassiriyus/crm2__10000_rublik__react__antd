import React, { } from 'react'
import UploadButton from '../../components/Actions/UploadButton.jsx'

const UploadClients = () => {
    return (<>
        <UploadButton title="Импортировать CSV" path="/uploadClients/csv_upload"/>
    </>)
}

export default UploadClients