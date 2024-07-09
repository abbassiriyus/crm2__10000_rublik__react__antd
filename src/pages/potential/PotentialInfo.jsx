import React from 'react'
import InfoTable from '../../components/InfoTable/InfoTable.jsx'

const metadata = {
    'General Information': [
        {
            'name': 'creationDate',
            'title': 'Дата создания записи',
            'type': 'datePicker'
        },
        {
            'name': 'legalEntity',
            'title': 'Юридическое лицо',
            'type': 'inputText'
        },
        {
            'name': 'segment',
            'title': 'Сегмент',
            'type': 'select',
            'selectPath': 'segment/options',
        },
    ]
};

const InfoPage = () => {
    return (
        <InfoTable path={'potential'} metadata={metadata} />
    );
}

export default InfoPage;
